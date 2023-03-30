import { INavData } from '@coreui/angular';


export const admin: INavData[] = [
  {
    name: 'Tableau de Bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
   
  },

  {
    name: 'Components',
    title: true
  },
  
  {
    name: 'Gestion Clients',
    url: '/client',
    iconComponent: {name: 'cil-pencil' },
    children: [
      {
        name: 'Client',
        url: '/client/list-client'
      },
      {
        name: 'Type Client',
        url: '/client/list-type-client'
      },
    
    
    ]
  },

  {
    name: 'Gestion Commandes',
    url: '/commande',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Commande',
        url: '/commande/list-commande'
      },
      {
        name: 'Livraison',
        url: '/commande/list-livraison'
      },
     
    ]
  },

  {
    name: 'Gestion Produits',
    url: '/produit',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Produit',
        url: '/produit/list-produit'
      },
      {
        name: 'Marque',
        url: '/produit/list-marque'
      },
     
    ]
  },

  {
    name: 'Gestion Personels',
    url: '/utilisateur',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Utilisateur',
        url: '/utilisateur/list-utilisateur'
      },
      {
        name: 'Localite',
        url: '/utilisateur/list-localite'
      },
      {
        name: 'Profile',
        url: '/utilisateur/list-profile'
      },
      {
        name: 'Personne',
        url: '/utilisateur/list-personne'
      },
    
    ]
  },


  {
    name: 'Statistiques',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
 /* {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
      
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
   
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },*/
];


export const respo: INavData[] = [
  {
    name: 'Tableau de Bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
   
  },

  {
    name: 'Components',
    title: true
  },
  
  {
    name: 'Gestion Clients',
    url: '/client',
    iconComponent: {name: 'cil-pencil' },
    children: [
      {
        name: 'Client',
        url: '/client/list-client'
      },
      {
        name: 'Maps',
        url: '/client/maps'
      },
    
    ]
  },

  {
    name: 'Gestion Commandes',
    url: '/commande',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Commande',
        url: '/commande/list-commande'
      },
      {
        name: 'Livraison',
        url: '/commande/list-livraison'
      },
     
    ]
  },

  {
    name: 'Gestion Produits',
    url: '/produit',
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: 'Produit',
        url: '/produit/list-produit'
      },
     
    ]
  },

  {
    name: 'Gestion Personels',
    url: '/utilisateur',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Utilisateur',
        url: '/utilisateur/list-utilisateur'
      },
      {
        name: 'Personne',
        url: '/utilisateur/list-personne'
      },
    
    ]
  },


  {
    name: 'Statistiques',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
 
  
 
];

export const users: INavData[] = [
  {
    name: 'Tableau de Bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
   
  },

  {
    name: 'Components',
    title: true
  },
  
  {
    name: 'Gestion Clients',
    url: '/client',
    iconComponent: {name: 'cil-pencil' },
    children: [
      {
        name: 'Client',
        url: '/client/list-client'
      },
      {
        name: 'Maps',
        url: '/client/maps'
      },
    
    ]
  },

  {
    name: 'Gestion Commandes',
    url: '/commande',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Commande',
        url: '/commande/list-commande'
      },
      {
        name: 'Livraison',
        url: '/commande/list-livraison'
      },
     
    ]
  },


  
];


