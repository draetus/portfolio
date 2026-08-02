import { Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';

import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'experience',
                component: ExperienceComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'skills',
                component: SkillsComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];