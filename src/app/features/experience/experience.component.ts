import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceItem } from '../../core/models/experience.model';
import { ExperienceService } from '../../core/services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {

  readonly experienceItems: ExperienceItem[];

  constructor(experienceService: ExperienceService) {
    this.experienceItems = experienceService.getExperiences();
  }
}
