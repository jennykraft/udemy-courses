type FileSource2 = { type: 'file'; path: string };
const fileSource2: FileSource2 = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource2 = { type: 'db', connectionUrl: string };
const dbSource2: DBSource2 = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source2 = FileSource2 | DBSource2;

// outsource type guard logic into functions
function isFile(source: Source2) {
    return source.type === 'file';
}

function loadData2(source: Source2) {
    // if ('path' in source) {
    if (source.type === 'file') {
        // source.path
        // source.path; => use that to open the file
        return;
    }
    // source.connectionUrl; => to reach out to database
}

class User {
    constructor(public name: string) { }

    join() {
        // ...
    }
}

class Admin {
    constructor(permissions: string[]) { }

    scan() {
        // ...
    }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
    // .join() OR .scan() ...
    if (entity instanceof User) { // instanceof for classes
        entity.join();
        return;
    }

    entity.scan();
}

// ––––––––––––––––––––– satisfies keyword –––––––––––––––––––––––––
const dataEntries = {
    entry1: 0.5,
    entry2: -1.0
} satisfies Record<string, number>;

// dataEntries.entry3; won't work
// rarely used

