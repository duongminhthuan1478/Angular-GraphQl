import { Component, HostListener, OnInit } from '@angular/core';
import L, { latLng, tileLayer, Map, circle, polygon } from 'leaflet';

@Component({
  selector: 'app-osm-board',
  templateUrl: './osm-board.component.html',
  styleUrls: ['./osm-board.component.scss']
})
export class OsmBoardComponent implements OnInit {

  // options = {
  //   layers: [
  //     tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     })
  //   ],
  //   zoom: 5,
  //   center: latLng([15.9030623, 105.8066925])
  //   //  center: [47.41322, -1.219482]
  // };

  ngOnInit(): void {
    const zoom = 20;
    const map = L.map('map').setView([16.064204, 108.159863], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
  }


  @HostListener('resize')
  onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 1000);
  }


}
