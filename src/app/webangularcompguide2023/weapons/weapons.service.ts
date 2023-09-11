import { Weapon } from '../shared';

export class WeaponsService {
  private weapons = [
    {
      info: new Weapon(
        'Lightning Sword',
        'Shocks your enemies',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdjb295bHhmMjk5ZGZpbGo5eXl6ZTl4M3hxMmRycm1vN2Jmdm93diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x3c6vrdvaD8L6ydSPx/giphy.gif'
      ),
      count: 1,
      id: 'lightningsword'
    },
    {
      info: new Weapon(
        'Hailstorm Hammer',
        'Blasts your enemies with ice',
        'https://media.giphy.com/media/bEWZ7Q23E0OUZuRsKC/giphy.gif'
      ),
      count: 1,
      id: 'hailstormhammer'
    },
  ];
  
    getWeapons() {
      return this.weapons;
    }
  
    getWeapon(id: string) {
      const weapon = this.weapons.find(
        (p) => {
          return p.id === id;
        }
      );
      return weapon?.info;
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
  