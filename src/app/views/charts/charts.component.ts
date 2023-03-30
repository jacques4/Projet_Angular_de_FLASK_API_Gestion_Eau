import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from '../models/client';
import { Commande } from '../models/commande';
import { Livrer } from '../models/livrer';
import { Produit } from '../models/produit';
import { ClientService } from '../services/client.service';
import { CommandeService } from '../services/commande.service';
import { LivrerService } from '../services/livrer.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

client: Array<Client> =  new Array<Client>();
livrer: Array<Livrer> =  new Array<Livrer>();
commande: Array<Commande> =  new Array<Commande>();
produit: Array<Produit> =  new Array<Produit>();
currentIndex = -1;
page=1;


//private url= "localhost:5000/clients"

constructor(private clientService: ClientService,
  private modalService: NgbModal,private http: HttpClient,
  private livrerService:LivrerService,
  private commandeService: CommandeService,
  private produitService: ProduitService){}


  ngOnInit(): void {

  this.findAll();
  this.findAllClient();   
  this.findAllCommande();
  this.findAllProduit();
     
  }

  public findAllClient(): void {
    this.clientService.getAll()
      .subscribe({
        next: (data) => {
          this.client = data.Clients;
          localStorage.setItem('client',this.client.length.toString())
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  public findAllCommande(): void {
    this.commandeService.getAll()
      .subscribe({
        next: (data) => {
          this.commande = data.Commande;
          localStorage.setItem('commande',this.commande.length.toString())
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  public findAllProduit(): void {
    this.produitService.getAll()
      .subscribe({
        next: (data) => {
          this.produit = data.produits;
          localStorage.setItem('produit',this.produit.length.toString())

          const voltic = this.produit.find((element, index) =>    
          index === 0)?.quantite
          const cool = this.produit.find((element, index) =>    
          index === 1)?.quantite
          const noble = this.produit.find((element, index) =>    
          index === 2)?.quantite
          const vital = this.produit.find((element, index) =>    
          index === 3)?.quantite

          localStorage.setItem('voltic', this.produit.find((element, index) => index === 0)?.quantite!);
          localStorage.setItem('cool',this.produit.find((element, index) => index === 1)?.quantite!);
          localStorage.setItem('noble', this.produit.find((element, index) => index === 2)?.quantite!);
          localStorage.setItem('vital',this.produit.find((element, index) => index === 3)?.quantite!);
          console.log("voltic",voltic);
          console.log("cool",cool);
          console.log("noble",noble);
          console.log("vital",vital);  
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


 public findAll(): void {
    this.livrerService.getAll()
      .subscribe({
        next: (data) => {
          this.livrer = data.Livrer;
          localStorage.setItem('livrer',this.livrer.length.toString())
          console.log(data);         
          
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.findAll();
    this.findAllClient();
    this.findAllCommande();
    this.findAllProduit();
    this.currentIndex = -1;
  }

  //months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  months = ['Eau Vital', 'Eau Voltic', 'Eau Cool', 'Eau Noble'];

  

  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };

 /* chartLineData = {
    labels: [...this.months].slice(0, 12),
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData,this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData,this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };*/

  chartLineOptions = {
    maintainAspectRatio: false,
  };

  chartDoughnutData = {
    labels: ['Livraison(s)', 'Client(s)','Commande(s)', 'Produit(s)'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [ parseInt(localStorage.getItem('livrer')!)  , parseInt(localStorage.getItem('client')!),  parseInt(localStorage.getItem('commande')!),  parseInt(localStorage.getItem('produit')!)]
      }
    ]
  };

  // chartDoughnutOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  chartPieData = {
    labels: ['Livraison(s)', 'Client(s)','Commande(s)', 'Produit(s)'],
    datasets: [
      {
        data: [ parseInt(localStorage.getItem('livrer')!)  , parseInt(localStorage.getItem('client')!),  parseInt(localStorage.getItem('commande')!),  parseInt(localStorage.getItem('produit')!)],
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        hoverBackgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16']
      }
    ]
  };

  chartBarData = {
    labels: [...this.months].slice(0, 12),
    datasets: [
      {
        label: 'Quantitee ',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],  borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        data: [localStorage.getItem('vital'), localStorage.getItem('cool'), localStorage.getItem('voltic'), localStorage.getItem('noble')]
      }
    ]
  };

  // chartPieOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

 /* chartPolarAreaData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };

  chartRadarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: '2020',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        tooltipLabelColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: '2021',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        tooltipLabelColor: 'rgba(255,99,132,1)',
        data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
      }
    ]
  };*/

  // chartRadarOptions = {
  //   aspectRatio: 1.5,
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  get randomData() {
    return Math.round(Math.random() * 100);
  }

}
