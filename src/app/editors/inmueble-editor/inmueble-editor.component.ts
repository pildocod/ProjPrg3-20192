import { Component, OnInit } from '@angular/core';
import { PropertyModel } from 'src/app/models/PropertyModel';
import { PropertyOperatorService } from 'src/app/services/property-operator.service';
import { FormGroup, FormBuilder } from '@angular/forms';

declare var M: any; //para materialize js SIEMPRE
declare let initComps: any;

@Component({
  selector: 'app-inmueble-editor',
  templateUrl: './inmueble-editor.component.html',
  styleUrls: ['./inmueble-editor.component.css']
})
export class InmuebleEditorComponent implements OnInit {

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

  fgValidation: FormGroup;

  constructor(private servicess: PropertyOperatorService,
  private fb: FormBuilder) {}
  
    fgValidationBuildar(){
      this.fgValidation = this.fb.group({
        depto:[],
        city:[],
        address:[],
        value:[],
        photo:[]        
      })
    }

  ngOnInit(): void {
    this.loadDataProperty();
    M.AutoInit();
    initComps();
  }

  saveOrpost():void{
    if(this.property == null){
      this.createDataProperty();
    }else{
      this.updateDataProperty();
    }
  }

  createDataProperty(): void {
    this.servicess.savePropertyData(this.property).subscribe(property => {
      console.log(property);
      alert('Inmueble Guardado');
      this.resetData();
      this.loadDataProperty()
    });
  }

  updateDataProperty():void{
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
  }

  editData(_ID): void {
    this.propertyList.forEach(elem => {
      if (elem._id == _ID) {
        this.property._id = elem._id;
        this.property.address = elem.address;
        this.property.adviserID = elem.adviserID;
        this.property.city = elem.city;
        this.property.department = elem.department;
        this.property.offerID = elem.offerID;
        this.property.photo = elem.photo;
        this.property.statusID = elem.statusID;
        this.property.typeID = elem.typeID;
        this.property.value = elem.value;
        this.property.video = elem.video;
      }
    });
  }
}
