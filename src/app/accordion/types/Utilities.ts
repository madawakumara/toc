export type Chapter = {
    id: number,
    name: string,
    isActive: boolean,
    isExpand: boolean,
    iconClass: string,
    pages: Page[],
    sections: Section []   
}

export type Section = {
    id: number,
    name: string,
    isActive: boolean,
    pages: Page[],
    subSection: SubSection[]
}

export type SubSection = {
    id: number,
    name: string,
    isActive: boolean,
    pages: Page[]
}

export type Page = {
    id: number,
    title: string,
    url: string
}