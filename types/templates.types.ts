export interface TopBarInfoItem {
  id: string;
  icon: string;
  value: string;
  url?: string;
}

export interface TopBarSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: {
    text: string;
    url: string;
    leadingIcon: string;
    trailingIcon: string;
  };
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  infoItems: TopBarInfoItem[];
  socialLinks: TopBarSocialLink[];
  searchLabel: string;
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  decorations?: {
    topLeft: { image: string; imageAlt: string };
    moving: { image: string; imageAlt: string };
    right: { image: string; imageAlt: string };
  };
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  dynamicTitle?: string;
}

export interface HeroCustomerImage {
  id: string;
  image: string;
  imageAlt: string;
}

export interface HeroData {
  backgroundImage: string;
  backgroundImageAlt: string;
  customers: HeroCustomerImage[];
  rating: number;
  ratingLabel: string;
  customerCountText: string;
  deliciousLabel: string;
  restaurantLabel: string;
  orderLabel: string;
  orderUrl: string;
  titleFirst: string;
  titleHighlight: string;
  titleSecond: string;
  description: string;
  descriptionPrefix: string;
  descriptionHighlight: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutUsData {
  subtitle: string;
  titleFirst: string;
  titleRed: string;
  titleSecond: string;
  titleGold: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondary: string;
  imageSecondaryAlt: string;
  centerImage: string;
  centerImageAlt: string;
  centerRingText: string;
  leftDecorationImage: string;
  leftDecorationImageAlt: string;
  rightDecorationImage: string;
  rightDecorationImageAlt: string;
}

export interface AboutUsSectionProps {
  data?: AboutUsData;
}

export interface ChefSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface ChefItem {
  id: string;
  namePrefix: string;
  nameHighlight: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  socialLinks: ChefSocialLink[];
}

export interface ChefData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonUrl: string;
  chefs: ChefItem[];
}

export interface ChefSectionProps {
  data?: ChefData;
}

export interface ChefPageItem {
  id: string;
  namePrefix: string;
  nameHighlight: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ChefPagePaginationItem {
  id: string;
  label: string;
  chefs: ChefPageItem[];
}

export interface ChefPageSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface ChefPageData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  backgroundImage: string;
  previousPageLabel: string;
  nextPageLabel: string;
  socialLinks: ChefPageSocialLink[];
  pages: ChefPagePaginationItem[];
}

export interface ChefPageSectionProps {
  data?: ChefPageData;
}

export interface OurServiceItem {
  id: string;
  icon: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
  linkText: string;
  url: string;
}

export interface OurServiceData {
  items: OurServiceItem[];
}

export interface OurServiceSectionProps {
  data?: OurServiceData;
}

export interface OurMenuItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
}

export interface OurMenuData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  items: OurMenuItem[];
}

export interface OurMenuSectionProps {
  data?: OurMenuData;
}

export interface MenuPageDish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
}

export interface MenuPageCategory {
  id: string;
  title: string;
  navigationLabel: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  dishes: MenuPageDish[];
}

export interface MenuPageData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  categories: MenuPageCategory[];
}

export interface MenuPageSectionProps {
  data?: MenuPageData;
}

export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  curveEnabled: boolean;
  previousLabel: string;
  nextLabel: string;
  buttonText: string;
  buttonUrl: string;
  items: GalleryItem[];
}

export interface GallerySectionProps {
  data?: GalleryData;
}

export interface GalleryPageData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  items: GalleryItem[];
}

export interface GalleryPageSectionProps {
  data?: GalleryPageData;
}

export interface AchievementItem {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface AchievementData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  counterDurationMs: number;
  motto: {
    line1: string;
    line2: string;
    highlightedLine: string;
  };
  items: AchievementItem[];
}

export interface AchievementSectionProps {
  data?: AchievementData;
}

export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface JourneyData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  items: JourneyItem[];
}

export interface JourneySectionProps {
  data?: JourneyData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  autoPlayIntervalMs: number;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface TestimonialPageItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  avatarAlt: string;
}

export interface TestimonialPagePaginationItem {
  id: string;
  label: string;
  testimonials: TestimonialPageItem[];
}

export interface TestimonialPageData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pages: TestimonialPagePaginationItem[];
}

export interface TestimonialPageSectionProps {
  data?: TestimonialPageData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  backgroundImage: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  quickLinksTitle: string;
  openingHoursTitle: string;
  contactTitle: string;
  slogan: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  openingHours: { id: string; days: string; hours: string }[];
  contactInfo: { address: string; phone: string; email: string };
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Topbar: string;
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface PageComponentRegistry {
  components: string[];
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  primaryButton: { text: string; url: string };
  secondaryButton: { text: string; url: string };
  backgroundImage: string;
  backgroundImageAlt: string;
  dishCard: {
    title: string;
    highlightedTitle: string;
    rating: number;
    ratingLabel: string;
    ingredients: { id: string; label: string }[];
  };
}

export interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
}

export interface ContactHighlightItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    highlights: ContactHighlightItem[];
  };
  form: {
    eyebrow: string;
    helperText: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    privacyText: string;
    successMessage: string;
    servicesList: ContactServiceOption[];
  };
  contactPanel: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    description: string;
    backgroundImage: string;
    backgroundImageAlt: string;
    items: ContactInfoItem[];
  };
  location: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactSectionProps {
  data?: ContactData;
}

export interface BookingFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface BookingSelectOption {
  id: string;
  label: string;
  value: string;
}

export interface BookingHoursItem {
  id: string;
  days: string;
  hours: string;
}

export interface BookingData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  mainImage: string;
  mainImageAlt: string;
  form: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    timePlaceholder: string;
    guestsLabel: string;
    guestsPlaceholder: string;
    requestLabel: string;
    requestPlaceholder: string;
    submitText: string;
    successMessage: string;
    timeOptions: BookingSelectOption[];
    guestOptions: BookingSelectOption[];
  };
  features: BookingFeatureItem[];
  openingHours: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
    description: string;
    backgroundImage: string;
    backgroundImageAlt: string;
    items: BookingHoursItem[];
  };
  assistance: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
    description: string;
    phoneLabel: string;
    phone: string;
    email: string;
    address: string;
    backgroundImage: string;
    backgroundImageAlt: string;
  };
}

export interface BookingSectionProps {
  data?: BookingData;
}

export interface EnquiryFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface EnquirySelectOption {
  id: string;
  label: string;
  value: string;
}

export interface EnquiryData {
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    highlights: EnquiryFeatureItem[];
  };
  vision: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
  };
  priority: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    features: EnquiryFeatureItem[];
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    investmentPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    privacyText: string;
    successMessage: string;
    servicesList: EnquirySelectOption[];
    investmentTypes: EnquirySelectOption[];
  };
}

export interface EnquirySectionProps {
  data?: EnquiryData;
}

export interface BlogItem {
  id: string;
  image: string;
  imageAlt?: string;
  date: string;
  category: string;
  author?: string;
  commentLabel?: string;
  title: string;
  description: string;
  url: string;
  content?: {
    intro: string;
    sections: {
      heading: string;
      text: string;
    }[];
  };
}

export interface BlogsData {
  subtitle: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
  readMoreText: string;
  loadMoreText: string;
  button: { text: string; url: string };
  blogs: BlogItem[];
  pageBlogs: BlogItem[];
  sidebarCta?: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

export interface BlogsSectionProps {
  data?: BlogsData;
  isPage?: boolean;
}

export interface BlogPageItem {
  id: string;
  slug: string;
  image: string;
  imageAlt: string;
  date: string;
  dateDay: string;
  dateMonth: string;
  category: string;
  author: string;
  commentLabel: string;
  title: string;
  detailTitle1: string;
  detailTitle2: string;
  description: string;
  url: string;
}

export interface BlogPagePaginationItem {
  id: string;
  label: string;
  blogs: BlogPageItem[];
}

export interface BlogDetailTextSection {
  id: string;
  title: string;
  text: string;
}

export interface BlogDetailBenefit {
  id: string;
  title: string;
  description: string;
}

export interface BlogDetailTip {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface BlogDetailRecentPost {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  date: string;
  url: string;
}

export interface BlogDetailCategory {
  id: string;
  label: string;
  url: string;
}

export interface BlogDetailTemplateData {
  readTime: string;
  introText: string;
  articleSections: BlogDetailTextSection[];
  quote: string;
  benefitsTitle: string;
  benefits: BlogDetailBenefit[];
  tipsTitle: string;
  tips: BlogDetailTip[];
  closingText: string;
  recentPostsTitle: string;
  recentPosts: BlogDetailRecentPost[];
  categoriesTitle: string;
  categories: BlogDetailCategory[];
  tagsTitle: string;
  tags: BlogDetailCategory[];
  sidebarCta: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    image: string;
    imageAlt: string;
  };
}

export interface BlogPageData {
  subtitle: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pages: BlogPagePaginationItem[];
  detailTemplate: BlogDetailTemplateData;
}

export interface BlogPageSectionProps {
  data?: BlogPageData;
}

export interface BlogDetailPageData {
  id: string;
  breadcrumbTitle: string;
  breadcrumbLabel: string;
  category: string;
  title1: string;
  title2: string;
  description: string;
  authorLabel: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  introText: string;
  articleSections: BlogDetailTextSection[];
  quote: string;
  benefitsTitle: string;
  benefits: BlogDetailBenefit[];
  tipsTitle: string;
  tips: BlogDetailTip[];
  closingText: string;
  recentPostsTitle: string;
  recentPosts: BlogDetailRecentPost[];
  categoriesTitle: string;
  categories: BlogDetailCategory[];
  tagsTitle?: string;
  tags?: BlogDetailCategory[];
  sidebarCta: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    image?: string;
    imageAlt?: string;
  };
}

export interface BlogDetailContentProps {
  data?: BlogDetailPageData;
}

export interface RestaurantFoodTemplateData {
  common: {
    globalUI: {
      siteMetadata: SiteMetadataData;
    };
    aboutBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    bookingBreadcrumb?: BreadcrumbData;
    enquiryBreadcrumb?: BreadcrumbData;
    teamBreadcrumb?: BreadcrumbData;
    galleryBreadcrumb?: BreadcrumbData;
    testimonialsBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    blogDetailBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    RestaurantFood: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { RestaurantFoodTopBar1?: TopBarData } };
        Header?: { variants?: { RestaurantFoodHeader1?: HeaderData } };
        Hero?: { variants?: { RestaurantFoodHero1?: HeroData } };
        AboutUs?: { variants?: { RestaurantFoodAboutUs1?: AboutUsData } };
        Chef?: { variants?: { RestaurantFoodChef1?: ChefData } };
        ChefPage?: { variants?: { RestaurantFoodChefPage1?: ChefPageData } };
        OurService?: { variants?: { RestaurantFoodOurService1?: OurServiceData } };
        OurMenu?: { variants?: { RestaurantFoodOurMenu1?: OurMenuData } };
        MenuPage?: { variants?: { RestaurantFoodMenuPage1?: MenuPageData } };
        Gallery?: { variants?: { RestaurantFoodGallery1?: GalleryData } };
        GalleryPage?: { variants?: { RestaurantFoodGalleryPage1?: GalleryPageData } };
        Achievement?: { variants?: { RestaurantFoodAchievement1?: AchievementData } };
        Journey?: { variants?: { RestaurantFoodJourney1?: JourneyData } };
        Testimonials?: { variants?: { RestaurantFoodTestimonials1?: TestimonialsData } };
        TestimonialPage?: { variants?: { RestaurantFoodTestimonialPage1?: TestimonialPageData } };
        Blogs?: { variants?: { RestaurantFoodBlogs1?: BlogsData } };
        BlogPage?: { variants?: { RestaurantFoodBlogPage1?: BlogPageData } };
        BlogDetails?: { variants?: { [key: string]: BlogDetailPageData } };
        whyChooseUs?: { variants?: { RestaurantFoodWhyChooseUs1?: WhyChooseUsData; RestaurantFoodAboutWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { RestaurantFoodContact1?: ContactData } };
        Booking?: { variants?: { RestaurantFoodBooking1?: BookingData } };
        enquiry?: { variants?: { RestaurantFoodEnquiry1?: EnquiryData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
