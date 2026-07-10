import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-pricing',
  imports: [SectionTitleComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  pricingCategories = [

    {
      id: 1,
      title: 'Facial',
      services: [
        { name: 'Normal Clean Up', price: 550 },
        { name: 'Fruite Clean Up', price: 750 },
        { name: 'Lotus Clean Up', price: 1000 },
        { name: 'Whitening Clean Up', price: 1550 },
        { name: 'D-Tan Clean Up', price: 1350 },
        { name: 'O3+ Clean Up', price: 2000 }
      ]
    },

    {
      id: 2,
      title: 'Facial Services',
      services: [
        { name: 'Fruite Facial', price: 1000 },
        { name: 'Normal Facial', price: 850 },
        { name: 'VLCC Facial', price: 1200 },
        { name: 'Gold Facial', price: 2000 },
        { name: 'Diamond Facial', price: 2500 },
        { name: 'D-Tan Facial', price: 1850 },
        { name: 'O3+ Facial', price: 3000 },
        { name: 'Pimple Treatment', price: 1500 },
        { name: 'Wrinkle Free Treatment', price: 2500 },
        { name: 'Age and Skin Treatment', price: 3500 },
        { name: 'O3+ Pimple Treatment', price: 3200 },
        { name: 'Whitening Treatment', price: 2000 },
        { name: 'O3+ Whitening & Brightening Treatment', price: 3500 },
      ]
    },

    {
      id: 3,
      title: 'Bleach Services',
      services: [
        { name: 'Face and Neck', price: 350 },
        { name: 'Underarms', price: 100 },
        { name: 'Back', price: 200 },
        { name: 'Upper Lips', price: 50 },
        { name: 'Full Arms', price: 500 },
        { name: 'Half Arms', price: 300 },
        { name: 'Full Legs', price: 600 },
        { name: 'Feet', price: 150 },
        { name: 'Full Back', price: 500 },
        { name: 'Full Front', price: 500 },
        { name: 'Midiff (Both Front and Back)', price: 350 },
        { name: 'Full Body', price: 2000 },
        { name: 'Full Body D-Tan', price: 2000 },
        { name: 'O3+ Vleach Face', price: 500 },
        { name: 'D-Tan Pack', price: 350 },
      ]
    },

    {
      id: 4,
      title: 'Massage',
      services: [
        { name: 'Body Massage', price: 2000 },
        { name: 'Body Polishing', price: 4500 }
      ]
    },
    {
      id: 5,
      title: 'Hair Treatment',
      services: [
        { name: 'Smoothening', price: "3500/- Onwards" },
        { name: 'Straightening', price: "4500/- Onwards" },
        { name: 'Rebonding', price: "4500/- Onwards" },
        { name: 'NanoPlastia Treatment', price: "5000/- Onwards" },
        { name: 'Cysteine Treatment', price: "4000/- Onwards" },
        { name: 'Botox Treatment', price: "4000/- Onwards" },
        { name: 'Root Touch up for Smoothining', price: "2700/- Onwards" },
        { name: 'Root Touch up for Rebonding', price: "3200/- Onwards" },
        { name: 'Keratin Treatement', price: "4000/- Onwards" },
      ]
    },
    {
      id: 6,
      title: 'Color',
      services: [
        { name: 'Root Touch Up', price: "1200" },
        { name: 'Root Touch Up Ammonia Free', price: "1700" },
        { name: 'Global Ammonia Free Colors', price: "2500/- Onwards" },
        { name: 'Global', price: "2000/- Onwards" },
        { name: 'Streaking [per streak]', price: "300/- Onwards" },
        { name: 'Creative Color', price: "3500/- Onwards" },
      ]
    },
    {
      id: 7,
      title: 'Threading',
      services: [
        { name: 'Eyebrows', price: "50/-" },
        { name: 'Upper Lip / Forehead / Chin', price: "30/- Per" },
        { name: 'Full Face', price: "200" },
      ]
    },
    {
      id: 8,
      title: 'Waxing',
      services: [
        { name: 'Upper Lip [Honey wax / Threading]', price: "50/-" },
        { name: 'Chin', price: "50/-" },
        { name: 'Underarms', price: "60/-" },
        { name: 'Half Leg (Regular / O3+ / Rica)', price: "250/ 700/ 500" },
        { name: 'Full Leg (Regular / O3+ / Rica)', price: "450/ 1000/ 800" },
        { name: 'Full Arms (Regular / O3+ / Rica)', price: "300/ 600/ 450" },
        { name: 'Bikini Line (Regular / O3+)', price: "2000/- 2500/-" },
        { name: 'Back Line', price: "900/-" },
        { name: 'Midriff', price: "200/-" },
        { name: 'Neck-Line Chin', price: "50/-" },
        { name: 'Full Face', price: "500/-" },
        { name: 'Full Body (Regular / O3+ / Rica)', price: "2000/- 2500/- 2500/-" },
      ]
    },
    {
      id: 9,
      title: 'Makeup',
      services: [
        { name: 'Eyes and Lip Makeup', price: "500/-" },
        { name: 'Executive Makeup', price: "1000/-" },
        { name: 'Light Makeup', price: "1500/-" },
        { name: 'party Makeup krylon', price: "2000/-" },
      ]
    },
    {
      id: 10,
      title: 'Briadal Makeup',
      services: [
        { name: 'Makeup', price: "3500/-" },
        { name: 'Hari Do', price: "1200/-" },
        { name: 'Saree Drape', price: "250/-" },
        { name: 'Change Of Polish', price: "150/-" },
      ]
    },
    {
      id: 11,
      title: 'Mehandi',
      services: [
        { name: 'Full Arms', price: "1500/-" },
        { name: 'Half Arms', price: "800/-" },
        { name: 'Half Leg', price: "1000/-" },
        { name: 'Arabic', price: "1000/-" },
        { name: 'Bridal Mehandi', price: "3000/-" },
      ]
    },
    {
      id: 12,
      title: 'Additional',
      services: [
        { name: 'MAC Makeup', price: "5000/-" },
        { name: 'HD Makeup', price: "4500/-" },
        { name: 'Outdoor Bridal Makeup', price: "7000/-" },
        { name: 'Air Brush', price: "8000/-" },
      ]
    },
    {
      id: 13,
      title: 'Friend Of Bridge',
      services: [
        { name: 'Makeup', price: "3500/-" },
        { name: 'Hair Do', price: "1200/-" },
        { name: 'Saree Drape', price: "250/-" },
        { name: 'Change of Polish', price: "150/-" },
        { name: 'Light Makeup', price: "1000/-" },
        { name: 'Eye Makeup', price: "500/-" },
      ]
    },
    {
      id: 14,
      title: 'Shampoo',
      services: [
        { name: 'Normal Wash', price: "50/-" },
        { name: 'Wash, Conditioning & Blast Dry', price: "100/-" },
      ]
    },
    {
      id: 15,
      title: 'Beard',
      services: [
        { name: 'Beard', price: "80/-" },
        { name: 'Beard Trimming', price: "50/-" },
        { name: 'Beard Color', price: "150/-" },
        { name: 'Beard SPA', price: "350/-" },
      ]
    },
    {
      id: 16,
      title: 'Hair Cut',
      services: [
        { name: 'Hair Cut + Wash', price: "120/-" },
        { name: 'Deep Conditioning _ Hair Cut', price: "150/-" },
        { name: 'Ironing (S/M)', price: "200/-" },
      ]
    },
    {
      id: 17,
      title: 'Color & Highlight',
      services: [
        { name: 'Global hair Color', price: "600/- Onwards" },
        { name: 'Global hair Color (Amonia Free)', price: "700/- Onwards" },
        { name: 'Root-Touchup', price: "500/- Onwards" },
        { name: 'Root-Touchup (Amonia Free)', price: "650/- Onwards" },
        { name: 'Highlight (R / Fashion Shade) per chunk', price: "500/- Onwards" },
      ]
    },
    {
      id: 18,
      title: 'Cut & Color',
      services: [
        { name: 'Haircut with Wash + Hair Spa', price: "600/-" },
        { name: 'Haircut + Hair Color', price: "600/-" },
        { name: 'Haircut + Hair Color (Amonia Free)', price: "700/-" },
        { name: 'Haircut + Beared Trim + Facial', price: "1000/-" },
      ]
    },
    {
      id: 19,
      title: 'Head Massage',
      services: [
        { name: 'Classic - Coconut Oil(20-30 min.)', price: "300/-" },
        { name: 'Almond Oil (20-30 min.)', price: "350/-" }
      ]
    },
    {
      id: 12,
      title: 'Hair Spa',
      services: [
        { name: 'Hair Spa', price: "550/-" },
        { name: 'Dry & Frizzy Hair', price: "700/-" },
        { name: 'Chemically Treated Hair', price: "700/-" }
      ]
    },
    {
      id: 21,
      title: 'Hair Treatment',
      services: [
        { name: 'Anti Hair Fall', price: "850/- Onwards" },
        { name: 'Anti Dandruff', price: "950/- Onwards" },
        { name: 'Smoothing Treatment', price: "2000/- Onwards" },
        { name: 'Keratin Treatment', price: "2000/- Onwards" },
        { name: 'Nanoplastia Treatment', price: "2000/- Onwards" },
      ]
    },
  ];

  get leftPricing() {
    return this.pricingCategories.filter((_, index) => index % 2 === 0);
  }

  get rightPricing() {
    return this.pricingCategories.filter((_, index) => index % 2 !== 0);
  }
}
