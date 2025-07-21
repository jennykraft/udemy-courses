// –––––––––––– type guards ––––––––––––––––
type FileSource = { path: string };
const fileSource: FileSource = {
    path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
    // Open + read file OR reach out to database server
    if ('path' in source) {
        // source.path; for opening the file
        return;
    }
    // it's a dbsource
    // source.connectionUrl; to reach out to database

}

// –––––––––– discriminated unions –––––––––––
type FileSource1 = { type: 'file'; path: string };
const fileSource1: FileSource1 = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource1 = { type: 'db'; connectionUrl: string };
const dbSource1: DBSource1 = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source1 = FileSource1 | DBSource1;

function loadData1(source: Source1) {
    // Open + read file OR reach out to database server
    if (source.type = 'file') {
        // source.path; for opening the file
        return;
    }
    // it's a dbsource
    // source.connectionUrl; to reach out to database

}