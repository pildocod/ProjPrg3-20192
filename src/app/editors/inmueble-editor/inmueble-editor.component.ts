import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/PropertyModel';
import { PropertyOperatorService } from 'src/app/services/property-operator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditorsModule } from './../editors.module';
import { Subscription } from 'rxjs';
import { HogarSecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/UserModel';

declare var M: any; //para materialize js SIEMPRE
declare let initComps: any;



@Component({
  selector: 'app-inmueble-editor',
  templateUrl: './inmueble-editor.component.html',
  styleUrls: ['./inmueble-editor.component.css']
})
export class InmuebleEditorComponent implements OnInit {

  fgValidation: FormGroup;

  propertyList: PropertyModel[] = [];

  property: PropertyModel = {
    _id: null,
    department: null,
    city: null,
    address: null,
    value: null,
    typeID: null,
    offerID: null,
    adviserID: null,
    photo: null,
    video: null,
    statusID: null
  }

  userLogged: Boolean = false;
  userName: String;
  userInfo: UserModel;
  subscription: Subscription;

  constructor(private servicess: PropertyOperatorService, private fb: FormBuilder,private secService: HogarSecurityService) { }

  ngOnInit(): void {
    this.loadDataProperty();
    M.AutoInit();
    initComps();
    this.fgValidationBuilder();
    this.verifyUserSession();
  }

  chooseSelected(event: any) {
    this.property.typeID = event.target.value;
  }

  offerSelected(event: any) {
    this.property.offerID = event.target.value;
  }

  statusSelected(event: any) {
    this.property.statusID = event.target.value;
  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {
      this.userInfo = user;
      this.updateInfo();
    });
  }

  updateInfo() {
    let msg = "In session: ";
    this.userLogged = this.userInfo.isLogged;
    this.userName = this.userInfo.name;
  }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      _id: [null, []],
      department: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required, Validators.minLength(7)]],
      value: ['', [Validators.required, Validators.minLength(4)]],
      typeID: ['', [Validators.required]],
      offerID: ['', []],
      photo: ['', [Validators.required, Validators.minLength(7)]],
      statusID: ['', [Validators.required]],
      adviserID: ["",[Validators.required]],
      video: ["",[]],
    })
  }

  get fg() {
    return this.fgValidation.controls;
  }

  saveOrpost(): void {
    this.propertyCreator();
    if (this.property._id == null) {
      this.createDataProperty();
    } else {
      this.updateDataProperty();
    }
  }

  propertyCreator() {
    this.property._id = this.fg._id.value;
    this.property.department = this.fg.department.value;
    this.property.city = this.fg.city.value;
    this.property.address = this.fg.address.value;
    this.property.value = this.fg.value.value;
    this.property.typeID = this.fg.typeID.value;
    this.property.offerID = this.fg.offerID.value;
    this.property.photo = this.fg.photo.value;
    this.property.statusID = this.fg.statusID.value;
    this.property.adviserID = this.fg.adviserID.value;
    this.property.video = this.fg.video.value;
  }

  createDataProperty(): void {
    console.log("Guardando:" + this.fg.address.value)
    this.servicess.savePropertyData(this.property).subscribe(property => {
      console.log(property);
      this.resetData();
      this.loadDataProperty()
    });
  }

  updateDataProperty(): void {
    this.servicess.putPropertyData(this.property).subscribe(property => {
      console.log(property);
      alert('Inmueble Actualizado');
      this.resetData();
      this.loadDataProperty()
    })
  }

  loadDataProperty(): void {
    this.servicess.getAllProperties().subscribe(propList => {
      console.log(propList);
      this.propertyList = propList;
      initComps();
      //alert('Elementos Cargados');
    });
  }

  resetData(): void {
    this.property._id = null;
    this.property.address = null;
    this.property.adviserID = null;
    this.property.city = null;
    this.property.department = null;
    this.property.offerID = null;
    this.property.photo = null;
    this.property.statusID = null;
    this.property.typeID = null;
    this.property.value = null;
    this.property.video = null;
    this.fg._id.setValue(null);
    this.fg.address.setValue('');
    this.fg.adviserID.setValue('');
    this.fg.city.setValue('');
    this.fg.department.setValue('');
    this.fg.offerID.setValue('');
    this.fg.photo.setValue('');
    this.fg.statusID.setValue('');
    this.fg.typeID.setValue('');
    this.fg.value.setValue('');
    this.fg.video.setValue('');
  }

  editData(_ID): void {
    this.propertyList.forEach(elem => {
      if (elem._id == _ID) {
        this.fg._id.setValue(elem._id);
        this.fg.address.setValue(elem.address);
        this.fg.adviserID.setValue(elem.adviserID);
        this.fg.city.setValue(elem.city);
        this.fg.department.setValue(elem.department);
        this.fg.offerID.setValue(elem.offerID);
        this.fg.photo.setValue(elem.photo);
        this.fg.statusID.setValue(elem.statusID);
        this.fg.typeID.setValue(elem.typeID);
        this.fg.value.setValue(elem.value);
        this.fg.video.setValue(elem.video);
      }
    });
  }
}
