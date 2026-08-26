import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {

  readonly featuredProjects: ProjectItem[];
  readonly palmsoftProjects: ProjectItem[];
  readonly sulamericaProjects: ProjectItem[];

  constructor(projectService: ProjectService) {
    const projects = projectService.getProjects();

    this.featuredProjects = projects.filter(project => project.featured);
    this.palmsoftProjects = projects.filter(project => !project.featured && project.company === 'PalmSoft Tecnologia');
    this.sulamericaProjects = projects.filter(project => !project.featured && project.company === 'SulAmérica');
  }
}
