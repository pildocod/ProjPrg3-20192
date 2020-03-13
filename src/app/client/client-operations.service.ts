import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientOperationsService {

  constructor() { }

  getClientListData() {
    return this.data
  }

  searchClient(clientId) {
    return this.data.find(c => c.id == clientId);
  }

  updateClient(client){
    let currentClient = this.searchClient(client.id);
    if(currentClient != undefined && currentClient != null){
      currentClient.name = client.name;
      currentClient.email = client.email;
      currentClient.phone = client.phone;
      return true;
    }
    return false;
  }

  data = [
    {
      "id": "5e6ae9a99b5a223b6b191108",
      "index": 0,
      "guid": "6270879d-a5b3-487e-ad04-d8cc9364fcf5",
      "isActive": true,
      "balance": "$3,261.53",
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "eyeColor": "brown",
      "name": "Danielle Crawford",
      "gender": "female",
      "company": "ESSENSIA",
      "email": "daniellecrawford@essensia.com",
      "phone": "+1 (853) 583-2900",
      "address": "846 Oliver Street, Alderpoint, Montana, 8471",
      "about": "Nostrud incididunt pariatur id elit mollit aute veniam aute in nisi aliqua irure. Consequat excepteur in et est velit. Mollit nostrud nisi commodo aliquip. Aute anim commodo amet proident.\r\n",
      "registered": "2015-10-17T02:55:16 +05:00",
      "latitude": -53.459357,
      "longitude": 35.018897,
      "tags": [
        "adipisicing",
        "veniam",
        "ut",
        "qui",
        "et",
        "esse",
        "excepteur"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Caldwell Snow"
        },
        {
          "id": 1,
          "name": "Roseann Porter"
        },
        {
          "id": 2,
          "name": "Nunez Ellis"
        }
      ],
      "greeting": "Hello, Danielle Crawford! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "id": "5e6ae9a995bd9485cfb863ce",
      "index": 1,
      "guid": "77c4ed56-8ac2-470d-b76b-0fb6d8aca289",
      "isActive": false,
      "balance": "$3,294.93",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": "Buckner Reese",
      "gender": "male",
      "company": "ZILLAN",
      "email": "bucknerreese@zillan.com",
      "phone": "+1 (947) 588-2949",
      "address": "353 Stuyvesant Avenue, Bodega, Alabama, 1286",
      "about": "Sit laboris dolor esse sint eiusmod aliqua anim. Dolore cillum qui mollit duis sint velit aute elit mollit. Ea adipisicing laboris dolor eiusmod ullamco adipisicing velit et duis. Dolore adipisicing eu duis labore. Quis ea nulla cillum incididunt amet nisi commodo irure ex incididunt dolore duis amet. Lorem ut irure consectetur ad eiusmod commodo officia laborum Lorem mollit minim.\r\n",
      "registered": "2017-02-16T12:36:57 +05:00",
      "latitude": -63.555062,
      "longitude": 42.572776,
      "tags": [
        "cupidatat",
        "dolor",
        "voluptate",
        "voluptate",
        "ea",
        "adipisicing",
        "proident"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Petty Ratliff"
        },
        {
          "id": 1,
          "name": "Peck Soto"
        },
        {
          "id": 2,
          "name": "Peggy Valencia"
        }
      ],
      "greeting": "Hello, Buckner Reese! You have 9 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "id": "5e6ae9a9913212e7e1a750e3",
      "index": 2,
      "guid": "54889378-30d0-4ac1-9879-66bcdbc11974",
      "isActive": true,
      "balance": "$3,142.48",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "green",
      "name": "Annabelle Harris",
      "gender": "female",
      "company": "QUANTALIA",
      "email": "annabelleharris@quantalia.com",
      "phone": "+1 (843) 502-3417",
      "address": "130 Buffalo Avenue, Chamberino, Michigan, 8649",
      "about": "Nisi ea minim enim aute aute laboris incididunt anim adipisicing duis irure. Non nulla labore eiusmod cillum nostrud laborum elit incididunt deserunt incididunt sit elit et sunt. Aliqua duis Lorem esse cupidatat ullamco cupidatat enim laborum quis. Elit amet irure in ut reprehenderit magna Lorem. Consequat ipsum duis fugiat ex dolore sit culpa Lorem. Culpa magna aliqua commodo ullamco. Officia commodo officia ex aliquip laborum in ullamco quis occaecat labore.\r\n",
      "registered": "2018-11-06T10:41:41 +05:00",
      "latitude": 48.427219,
      "longitude": -79.821787,
      "tags": [
        "fugiat",
        "magna",
        "eu",
        "nostrud",
        "quis",
        "qui",
        "pariatur"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Mcpherson Terry"
        },
        {
          "id": 1,
          "name": "Crystal Burke"
        },
        {
          "id": 2,
          "name": "Ford Thornton"
        }
      ],
      "greeting": "Hello, Annabelle Harris! You have 4 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "id": "5e6ae9a9c2865150de1c95e3",
      "index": 3,
      "guid": "bac2ea28-4097-4142-81ae-8fd531abf901",
      "isActive": true,
      "balance": "$3,611.79",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "brown",
      "name": "Fernandez Calderon",
      "gender": "male",
      "company": "VENOFLEX",
      "email": "fernandezcalderon@venoflex.com",
      "phone": "+1 (839) 460-3471",
      "address": "574 Veranda Place, Ernstville, American Samoa, 3227",
      "about": "Consequat enim eiusmod id quis in do ipsum nulla excepteur. Incididunt Lorem est consequat magna. Officia reprehenderit id qui cupidatat veniam eu mollit sit elit occaecat fugiat. Ad quis do consequat pariatur amet occaecat. Id commodo laboris labore nisi sint amet excepteur est duis fugiat. Deserunt et incididunt eu sunt nulla deserunt dolor deserunt. Cillum deserunt nulla aute in.\r\n",
      "registered": "2016-08-03T07:27:27 +05:00",
      "latitude": -3.051088,
      "longitude": 165.617684,
      "tags": [
        "id",
        "qui",
        "deserunt",
        "incididunt",
        "dolore",
        "qui",
        "adipisicing"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Nikki Ford"
        },
        {
          "id": 1,
          "name": "Young Hardy"
        },
        {
          "id": 2,
          "name": "Letha Richmond"
        }
      ],
      "greeting": "Hello, Fernandez Calderon! You have 9 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "id": "5e6ae9a9ac74a0962ecd3587",
      "index": 4,
      "guid": "2d3b45cc-65cb-47cc-b3df-efe626a4030e",
      "isActive": true,
      "balance": "$2,247.83",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "blue",
      "name": "Kristine Crosby",
      "gender": "female",
      "company": "CONFERIA",
      "email": "kristinecrosby@conferia.com",
      "phone": "+1 (934) 506-3839",
      "address": "383 Manhattan Court, Boonville, Missouri, 4004",
      "about": "Laborum reprehenderit dolor laborum ad eu velit velit id. Mollit laborum dolor ullamco dolore ad ullamco fugiat reprehenderit in. Ipsum laborum incididunt Lorem ut eu commodo amet fugiat consectetur aliquip qui consectetur ullamco est. Do duis consectetur aliqua eiusmod ipsum ex.\r\n",
      "registered": "2019-09-01T03:48:19 +05:00",
      "latitude": -87.147999,
      "longitude": -14.826353,
      "tags": [
        "et",
        "tempor",
        "adipisicing",
        "aliquip",
        "tempor",
        "pariatur",
        "veniam"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Huffman Fleming"
        },
        {
          "id": 1,
          "name": "Gibbs Huffman"
        },
        {
          "id": 2,
          "name": "Miles Price"
        }
      ],
      "greeting": "Hello, Kristine Crosby! You have 6 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "id": "5e6ae9a90c4bf9543d983cb5",
      "index": 5,
      "guid": "d6705503-717f-4f90-ac9f-b5aac7d7a679",
      "isActive": true,
      "balance": "$3,067.77",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "green",
      "name": "Ashley Dunn",
      "gender": "female",
      "company": "UNQ",
      "email": "ashleydunn@unq.com",
      "phone": "+1 (962) 476-2822",
      "address": "346 Nassau Street, Ballico, Rhode Island, 3184",
      "about": "Enim occaecat non ad nostrud irure velit adipisicing et ut nostrud. Sunt officia tempor nisi commodo irure pariatur voluptate sunt sit. Ex cillum esse pariatur commodo fugiat amet velit consectetur do fugiat commodo mollit. Labore nulla Lorem sit amet voluptate laborum labore excepteur ut incididunt eiusmod incididunt ad dolor. Enim nulla officia minim dolore ad eu mollit consequat laboris quis ullamco irure ut. Eu consectetur reprehenderit eiusmod aute culpa voluptate culpa laborum. Ullamco mollit aliqua quis mollit.\r\n",
      "registered": "2018-04-15T01:17:49 +05:00",
      "latitude": -64.400319,
      "longitude": 95.886272,
      "tags": [
        "adipisicing",
        "cupidatat",
        "nostrud",
        "ex",
        "occaecat",
        "nulla",
        "aute"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Katrina Reeves"
        },
        {
          "id": 1,
          "name": "Eliza Albert"
        },
        {
          "id": 2,
          "name": "Madeleine Ortiz"
        }
      ],
      "greeting": "Hello, Ashley Dunn! You have 1 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "id": "5e6ae9a9f70a51a3ebe61739",
      "index": 6,
      "guid": "12a7e27c-039a-4464-b033-4ec74b666db8",
      "isActive": false,
      "balance": "$1,160.03",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "green",
      "name": "Blanca Montgomery",
      "gender": "female",
      "company": "MENBRAIN",
      "email": "blancamontgomery@menbrain.com",
      "phone": "+1 (969) 515-3607",
      "address": "939 Noel Avenue, Richford, New Hampshire, 159",
      "about": "Ad laboris nulla laboris aute sit magna dolor id veniam in elit ipsum mollit. Et ea sit cupidatat ullamco deserunt exercitation nostrud duis esse esse. Enim irure deserunt ipsum ex consequat cupidatat anim nostrud labore incididunt. Eu mollit laborum dolor sint nisi minim ex eiusmod duis.\r\n",
      "registered": "2019-04-12T03:16:42 +05:00",
      "latitude": 12.919811,
      "longitude": -61.10219,
      "tags": [
        "reprehenderit",
        "id",
        "cillum",
        "deserunt",
        "enim",
        "labore",
        "commodo"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Tonya Spence"
        },
        {
          "id": 1,
          "name": "Graham Everett"
        },
        {
          "id": 2,
          "name": "Mendez Adkins"
        }
      ],
      "greeting": "Hello, Blanca Montgomery! You have 6 unread messages.",
      "favoriteFruit": "banana"
    }
  ]

}


