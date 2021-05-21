export class Profiles {
    constructor(
        public name: string,
        public login: string,        
        public avatar_url: string,
        public followers: number,
        public followig: number,      
        public public_repos: number,
        public bio: string,
        public location: string,
        public blog: string,
        public email: string,
        public company: string,      
        public created_at: Date,
    ){}
}
