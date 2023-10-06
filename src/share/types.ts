export enum SelectedPage {
    Home = "home",
    Beneficios = "beneficios",
    Serviços = "serviços",
    Contato = "contato"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType{
    name: string;
    description: string;
    image: string;
  }