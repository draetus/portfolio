import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../core/models/skill.model';
import { SkillsService } from '../../core/services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

  readonly skillCategories: SkillCategory[];

  constructor(skillsService: SkillsService) {
    this.skillCategories = skillsService.getCategories();
  }
}
