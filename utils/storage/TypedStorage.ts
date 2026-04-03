interface UserProfile {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

export interface AppStorageSchema {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  currentUser: UserProfile;
}

export class TypedStorage<T> {
  public get<K extends keyof T>(key: K): T[K] | null {
    const item = localStorage.getItem(key as string);
    
    if (!item) return null;
    
    try {
      return JSON.parse(item) as T[K];
    } catch (e) {
      return item as unknown as T[K]; 
    }
  }

  public set<K extends keyof T>(key: K, value: T[K]): void {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key as string, stringValue);
  }

  public remove<K extends keyof T>(key: K): void {
    localStorage.removeItem(key as string);
  }
}
