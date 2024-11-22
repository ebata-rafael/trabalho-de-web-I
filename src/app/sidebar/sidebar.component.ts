import { BookService } from './../service/book.service';
import { CommonModule } from '@angular/common';
import { BookResponse } from './../models/book.model';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {

  private readonly bookService = inject(BookService);

  books: BookResponse = {items: []};

  createBook() {
    this.bookService.createBook();
  }

  ngOnInit(): void {
    this.bookService.list().subscribe((result) => {
      this.books = result;
    });
  }

  confirmDelete(bookId: number) {
    const confirmDelete = confirm('Tem certeza que deseja excluir este livro?');
    if (confirmDelete) {
      // this.deleteBook(bookId);
    }
  }

  // deleteBook(bookId: number) {
  //   this.books = this.books.filter((book) => book.id !== bookId);
  // }
}
