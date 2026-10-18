import { Component, OnInit, inject, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import {
  JsonplaceholderService,
  ResourceItem,
  ResourceType,
} from './jsonplaceholder.service';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly jsonplaceholderService = inject(JsonplaceholderService);

  protected readonly title = 'JSONPlaceholder API Explorer';
  protected readonly resources: ResourceType[] = ['posts', 'users', 'todos'];

  protected readonly selectedResource = signal<ResourceType>('posts');
  protected readonly items = signal<ResourceItem[]>([]);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    void this.loadResource('posts');
  }

  protected async loadResource(resource: ResourceType): Promise<void> {
    this.selectedResource.set(resource);
    this.loading.set(true);
    this.error.set(null);

    try {
      const data = await firstValueFrom(this.getResourceRequest(resource));
      this.items.set(data);
    } catch {
      this.items.set([]);
      this.error.set('No fue posible cargar la información de la API pública.');
    } finally {
      this.loading.set(false);
    }
  }

  protected trackById(index: number, item: ResourceItem): number {
    return item.id ?? index;
  }

  protected getItemTitle(item: ResourceItem): string {
    if ('name' in item) {
      return item.name;
    }

    return item.title;
  }

  protected getItemDescription(item: ResourceItem): string {
    if ('body' in item) {
      return item.body;
    }

    if ('email' in item) {
      return `${item.username} · ${item.email}`;
    }

    return item.completed ? 'Completado' : 'Pendiente';
  }

  private getResourceRequest(resource: ResourceType): Observable<ResourceItem[]> {
    switch (resource) {
      case 'users':
        return this.jsonplaceholderService.getUsers();
      case 'todos':
        return this.jsonplaceholderService.getTodos();
      case 'posts':
      default:
        return this.jsonplaceholderService.getPosts();
    }
  }
}
