import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalService, ModalModule } from './modal';
import { DialogService, DialogModule } from './dialog';
import { PagerModule } from './pager';
import { RebirthNGConfig } from './rebirth-ng.config';
import { PaginationModule } from './pagination';
import { COMMON_SERVICES } from './window-ref';
import { AlertBoxModule } from './alert-box';
import { BadgeModule } from './badge';
import { PanelModule } from './panel';
import { AccordionModule } from './accordion';
import { ActionButtonModule } from './action-button';
import { RatingModule } from './rating';
import { TabsModule } from './tabs';
import { TooltipModule } from './tooltip';
import { PositionService } from './position';
import { PopoverModule } from './popover';
import { DatePickerModule } from './date-picker';
import { BreadcrumbsModule } from './breadcrumbs';
import { ProgressBarModule } from './progress-bar';
import { SelectButtonModule } from './select-button';
import { OverlayModule, OverlayService } from './overlay';
import { CarouselModule } from './carousel';
import { SwitchModule } from './switch/switch.module';
import { MenuBarModule } from './menu-bar/menu-bar.module';
import { AutoCompleteModule } from './auto-complete';
import { FlowStepModule } from './flow-step';
import { DataTableModule } from './data-table';
import { InfiniteScrollModule } from './infinite-scroll';
import { RebirthCommonModule } from './common';
import { DraggableModule } from './draggable';
import { FileUploadModule } from './file-upload';
import { TimePickerModule } from './time-picker/time-picker.module';


@NgModule({
  imports: [
    RebirthCommonModule,
    ModalModule,
    DialogModule,
    PagerModule,
    PaginationModule,
    AlertBoxModule,
    BadgeModule,
    PanelModule,
    AccordionModule,
    ActionButtonModule,
    RatingModule,
    TabsModule,
    TooltipModule,
    PopoverModule,
    DatePickerModule,
    BreadcrumbsModule,
    ProgressBarModule,
    SelectButtonModule,
    OverlayModule,
    CarouselModule,
    SwitchModule,
    MenuBarModule,
    AutoCompleteModule,
    FlowStepModule,
    InfiniteScrollModule,
    DataTableModule,
    FileUploadModule,
    TimePickerModule,
  ],
  exports: [
    RebirthCommonModule,
    ModalModule,
    DialogModule,
    PagerModule,
    PaginationModule,
    AlertBoxModule,
    BadgeModule,
    PanelModule,
    AccordionModule,
    ActionButtonModule,
    RatingModule,
    TabsModule,
    TooltipModule,
    PopoverModule,
    DatePickerModule,
    BreadcrumbsModule,
    ProgressBarModule,
    SelectButtonModule,
    OverlayModule,
    CarouselModule,
    SwitchModule,
    MenuBarModule,
    AutoCompleteModule,
    FlowStepModule,
    InfiniteScrollModule,
    DataTableModule,
    DraggableModule,
    FileUploadModule,
    TimePickerModule,
  ],
  declarations: [],
  providers: [],
})
export class RebirthNGModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: RebirthNGModule,
      providers: [
        ...COMMON_SERVICES,
        { provide: RebirthNGConfig, useClass: RebirthNGConfig },
        { provide: ModalService, useClass: ModalService },
        { provide: DialogService, useClass: DialogService },
        { provide: PositionService, useClass: PositionService },
        { provide: OverlayService, useClass: OverlayService }
      ]
    };
  }
}
