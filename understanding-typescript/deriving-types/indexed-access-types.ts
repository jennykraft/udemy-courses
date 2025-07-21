const appUser = {
    name: 'Max',
    age: 35,
    permissions: [{ id: 'p1', title: 'Admin', description: 'Admin access' }],
};

//type AppUser = typeof appUser;


type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[]; // array of objects
};

type Perms = AppUser['permissions']; // typescript type

// extract value type of array elements
type Perm = Perms[number]

type Names = string[];
type Name = Names[number];