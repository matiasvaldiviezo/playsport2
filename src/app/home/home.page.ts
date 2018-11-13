import { NavController } from '@ionic/angular'
import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  todos: Todo[];
 
  constructor(private navCtrl: NavController, private todoService: TodoService) { }
 
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }
 
  remove(item) {
    this.todoService.removeTodo(item.id);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}