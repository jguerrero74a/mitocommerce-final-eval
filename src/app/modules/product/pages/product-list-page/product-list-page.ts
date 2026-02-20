import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-page',
  imports: [],
  template: `
    <section class="section-shop py-[100px] max-[1200px]:py-[50px]">
      <div
        class="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
      >
        <div class="w-full flex mb-[-30px]">
          <div class="w-1/3"></div>
          <div class="w-2/3"></div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ProductListPage {}
