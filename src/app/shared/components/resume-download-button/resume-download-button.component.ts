import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-download-button',
  standalone: true,
  imports: [],
  templateUrl: './resume-download-button.component.html',
  styleUrl: './resume-download-button.component.scss'
})
export class ResumeDownloadButtonComponent {

    @Input() text = 'Download CV';

    @Input() filePath = 'assets/curriculo-mauricio-farias.pdf';

}
