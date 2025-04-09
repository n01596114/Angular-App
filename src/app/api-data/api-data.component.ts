import { Component, Injectable, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchPosts().subscribe(data => {
      this.posts = data;
    });
  }
}