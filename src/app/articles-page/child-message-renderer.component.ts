import {Component} from '@angular/core';
// import {ICellRendererAngularComp} from '@ag-grid-community/angular';

@Component({
    selector: 'child-cell',
    template: `<span><button (click)="invokeParentMethod()" class="btn btn-link  btn-sm">Читать статью</button></span>`,

})
export class ChildMessageRenderer {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        this.params.context.componentParent.open_article(this.params.data.id);
    }

    refresh(): boolean {
        return false;
    }
}