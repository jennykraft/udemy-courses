// intersection types

type FileData = {
    path: string;
    content: string;
};

type DatabaseData = {
    connenctionUrl: string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;
};

// combine both types
type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;




// what if instead of types we have interfaces?
interface FileData1 {
    path: string;
    content: string;
};

interface DatabaseData1 {
    connenctionUrl: string;
    credentials: string;
}

interface Status1 {
    isOpen: boolean;
    errorMessage?: string;
};

interface AccessedFileData1 extends FileData, Status { };
interface AccessedDatabaseData1 extends DatabaseData, Status { };