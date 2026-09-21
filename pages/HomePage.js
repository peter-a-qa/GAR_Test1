import { BasePage } from './BasePage.js';
import { RegistrationFormSection } from './sections/RegistrationFormSection.js';
import { DatePickerSection } from './sections/DatePickerSection.js';
import { AlertsSection } from './sections/AlertsSection.js';
import { DragAndDropSection } from './sections/DragAndDropSection.js';
import { SliderSection } from './sections/SliderSection.js';
import { ProductTableSection } from './sections/ProductTableSection.js';
import { DynamicButtonSection } from './sections/DynamicButtonSection.js';
import { LabelsAndLinksSection } from './sections/LabelsAndLinksSection.js';
import { SuggestionBoxSection } from './sections/SuggestionBoxSection.js';
import { FileUploadSection } from './sections/FileUploadSection.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.registrationForm = new RegistrationFormSection(page);
    this.datePickers = new DatePickerSection(page);
    this.alerts = new AlertsSection(page);
    this.dragAndDrop = new DragAndDropSection(page);
    this.slider = new SliderSection(page);
    this.productTable = new ProductTableSection(page);
    this.dynamicButton = new DynamicButtonSection(page);
    this.labelsAndLinks = new LabelsAndLinksSection(page);
    this.suggestionBox = new SuggestionBoxSection(page);
    this.fileUpload = new FileUploadSection(page);
  }

  async goto() {
    await super.goto('/');
  }
}
