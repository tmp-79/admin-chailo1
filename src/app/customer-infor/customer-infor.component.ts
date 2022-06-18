import { Component, OnInit } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'
@Component({
  selector: 'app-customer-infor',
  templateUrl: './customer-infor.component.html',
  styleUrls: ['./customer-infor.component.css']
})
export class CustomerInforComponent implements OnInit {
  data:any = []
  constructor(public firestore: Firestore) {
    console.log("Cusomter")
   }



  ngOnInit(): void {
    this.getData()
  }

  getData() {
    const dbInstance = collection(this.firestore, 'category');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
        console.log(this.data)
      })
  }

}
