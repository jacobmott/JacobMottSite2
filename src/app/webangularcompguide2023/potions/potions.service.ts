import { Potion } from '../shared';

export class PotionsService {
  private potions = [
    {
      info: new Potion(
        'Rage of the rambo',
        'Gives you the strength of a rambo',
        'https://media.giphy.com/media/cEfIIUkLVUZfngrIgv/giphy.gif'
      ),
      count: 1,
      id: 'zebra'
    },
    {
      info: new Potion(
        'Bravery of a lion',
        'Nothing scares you anymore',
        'https://media.giphy.com/media/AVmYx5pw2HY3RLxO8j/giphy.gif'
      ),
      count: 1,
      id: 'fastcat'
    },
  ];
  
    getPotions() {
      return this.potions;
    }
  
    getPotion(id: string) {
      const potion = this.potions.find(
        (p) => {
          return p.id === id;
        }
      );
      return potion?.info;
    }
  
    //updateServer(id: string, serverInfo: {name: string, status: string}) {
    //  const server = this.potions.find(
    //    (p) => {
    //      return p.id === id;
    //    }
    //  );
    //  if (server) {
    //    server.name = serverInfo.name;
    //    server.status = serverInfo.status;
    //  }
    //}
  }
  