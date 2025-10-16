/// <reference types="react-scripts" />

declare module '*.md' {
    const content: string;
    export default content;
}

declare module '*.tsv' {
    const content: string;
    export default content;
}
