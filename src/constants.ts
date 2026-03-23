export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "首页", href: "#home" },
  { label: "关于我们", href: "#about" },
  { label: "核心业务", href: "#services" },
  { label: "专业领域", href: "#expertise" },
  { label: "全球网络", href: "#global" },
  { label: "联系我们", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    title: "ESG表现提升方案",
    description: "为海内外中资企业提供全套ESG提升方案，助力企业融入全球供应链并提供技术支持。",
  },
  {
    title: "海外投资风险管理",
    description: "专注于中资企业海外投资与经营中的ESG挑战，提供专业的风险预警与管理服务。",
  },
  {
    title: "咨询与评估服务",
    description: "开展二方评估、专项研究及平台搭建，通过专业咨询帮助企业改善ESG表现。",
  },
  {
    title: "赋能培训与研究",
    description: "提供定制化的赋能培训，联合中国高等学府专家资源，开展前瞻性专项研究。",
  },
];

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  { title: "人权与劳工权益", description: "确保供应链中的公平待遇与合规性。" },
  { title: "供应链尽责管理", description: "建立透明、负责任的全球供应体系。" },
  { title: "生物多样性保护", description: "在海外投资中平衡经济发展与生态保护。" },
  { title: "职业健康与安全", description: "构建安全的工作环境，保障员工福祉。" },
  { title: "海外社区关系", description: "促进企业与当地社区的和谐共生。" },
  { title: "负责任品牌塑造", description: "提升企业在全球市场的可持续发展声誉。" },
];

export const GLOBAL_OFFICES = [
  { region: "总部", city: "北京" },
  { region: "中国", city: "上海" },
  { region: "国际", city: "欧洲、非洲、东南亚" },
];
