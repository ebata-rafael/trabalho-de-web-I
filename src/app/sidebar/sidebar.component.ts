import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './../service/book.service';
import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BookResponse } from '../models/book.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalDeleteComponent } from '../modals/modal-delete/modal-delete.component';
import { ModalCreateBookComponent } from '../modals/modal-create-book/modal-create-book.component';
import { debounceTime, take } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [BsModalService],
})
export class SidebarComponent implements OnInit {
  private readonly bookService = inject(BookService);
  private readonly fb = inject(FormBuilder);
  private readonly modalService = inject(BsModalService);

  form = this.fb.nonNullable.group({
    name: [''],
  });

  books: BookResponse = { items: [] };

  errorMessage: string = '';


  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.bookService.list().subscribe((result) => {
      this.books = result;
    });
  }

  createBook(){

    const modal = this.modalService.show(ModalCreateBookComponent);
    modal.content?.onClose.pipe(take(1)).subscribe((resp) => {
      if(resp){
        this.listar();
      }
    });
  }

  confirmDelete(bookId: number) {
    const modal = this.modalService.show(ModalDeleteComponent, {
      initialState: { id: bookId }
    });
    modal.content?.onClose.pipe(take(1)).subscribe((resp) => {
      if(resp){
        this.listar();
      }
    });
  }
}
