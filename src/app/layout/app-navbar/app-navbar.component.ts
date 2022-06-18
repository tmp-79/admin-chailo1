import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  public listNav = [
    {
      name: "Trang chủ",
      url: "",
      icon: "dashboard"
    },
    {
      name: "Phân lại danh mục",
      url: "phan-loai-danh-muc",
      icon: 'category'
    },
    {
      name: "Danh sách template",
      url: "danh-sach-template",
      icon: 'category'
    },
    {
      name: "Quản lý lượt mua",
      url: "quan-ly-luot-mua",
      icon: 'category'
    },
    {
      name: "Danh sách khách hàng",
      url: "danh-sach-khach-hang",
      icon: 'category'
    },
    {
      name: "Đơn hàng",
      url: "don-hang",
      icon: 'shopping_cart'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
