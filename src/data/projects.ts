export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  url: string;
  status: 'active' | 'beta' | 'archived';
  icon: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'risk-register',
    title: 'Risk Register Platform',
    description: 'Centralna platforma do zarządzania rejestrem ryzyk organizacji z automatyczną oceną i monitorowaniem.',
    longDescription: 'Kompleksowe rozwiązanie do identyfikacji, oceny i monitorowania ryzyk w organizacji. Platforma umożliwia tworzenie rejestru ryzyk, przypisywanie właścicieli, definiowanie planów mitygacji oraz śledzenie statusu w czasie rzeczywistym.',
    tags: ['Risk Management', 'ISO 31000', 'COSO', 'Dashboard'],
    url: 'https://risk-register.vercel.app',
    status: 'active',
    icon: 'shield',
    metrics: [
      { label: 'Ryzyka monitorowane', value: '2,400+' },
      { label: 'Organizacje', value: '15' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'grc-hub',
    title: 'GRC Compliance Hub',
    description: 'Zintegrowana platforma Governance, Risk & Compliance z modułem audytu i raportowania.',
    longDescription: 'Platforma GRC łącząca zarządzanie governance, ryzykiem i compliance w jednym narzędziu. Zawiera moduły do zarządzania politykami, audytów wewnętrznych, mapowania kontrol oraz automatycznego raportowania do zarządu.',
    tags: ['GRC', 'Compliance', 'Audit', 'Reporting'],
    url: 'https://grc-hub.vercel.app',
    status: 'active',
    icon: 'clipboard',
    metrics: [
      { label: 'Kontrolki', value: '850+' },
      { label: 'Audity rocznie', value: '120+' },
      { label: 'Uptime', value: '99.8%' },
    ],
  },
  {
    id: 'dora-monitor',
    title: 'DORA Compliance Monitor',
    description: 'Narzędzie do monitorowania zgodności z regulacjami DORA (Digital Operational Resilience Act).',
    longDescription: 'Specjalistyczne narzędzie wspierające organizacje finansowe w osiąganiu zgodności z DORA. Monitoruje wymagania dotyczące odporności operacyjnej, incydentów ICT, testów TLPT oraz zarządzania ryzykiem ICT third-party.',
    tags: ['DORA', 'ICT Risk', 'Financial Services', 'Regulatory'],
    url: 'https://dora-monitor.vercel.app',
    status: 'active',
    icon: 'bank',
    metrics: [
      { label: 'Instytucje', value: '8' },
      { label: 'Incydenty ICT', value: '340+' },
      { label: 'Uptime', value: '99.95%' },
    ],
  },
  {
    id: 'iso-manager',
    title: 'ISO 27001 Manager',
    description: 'System zarządzania bezpieczeństwem informacji zgodny z normą ISO/IEC 27001:2022.',
    longDescription: 'Aplikacja wspierająca wdrożenie i utrzymanie certyfikacji ISO 27001. Zarządza SOA (Statement of Applicability), politykami bezpieczeństwa, oceną ryzyka ISMS oraz rejestrem incydentów bezpieczeństwa informacji.',
    tags: ['ISO 27001', 'ISMS', 'Information Security', 'SOA'],
    url: 'https://iso-manager.vercel.app',
    status: 'active',
    icon: 'lock',
    metrics: [
      { label: 'Kontrolki SOA', value: '93' },
      { label: 'Certyfikacje', value: '12' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'incident-tracker',
    title: 'Incident Response Tracker',
    description: 'System do zarządzania incydentami bezpieczeństwa z workflow i eskalacją.',
    longDescription: 'Platforma do zarządzania cyklem życia incydentów bezpieczeństwa. Automatyzuje proces zgłaszania, klasyfikacji, eskalacji i dokumentowania incydentów. Integracja z SIEM i systemami ticketowymi.',
    tags: ['Incident Management', 'SOC', 'Workflow', 'Escalation'],
    url: 'https://incident-tracker.vercel.app',
    status: 'beta',
    icon: 'alert',
    metrics: [
      { label: 'Incydenty/mies.', value: '450+' },
      { label: 'Śr. czas reakcji', value: '< 15 min' },
      { label: 'Uptime', value: '99.7%' },
    ],
  },
  {
    id: 'policy-vault',
    title: 'Policy Vault',
    description: 'Repozytorium polityk i procedur z kontrolą wersji i akceptacją pracowników.',
    longDescription: 'Centralne repozytorium do zarządzania politykami, procedurami i standardami organizacji. Obsługuje workflow akceptacji, kontrolę wersji, automatyczne przeglądy oraz potwierdzanie zapoznania się przez pracowników.',
    tags: ['Policy Management', 'Document Control', 'Awareness', 'Workflow'],
    url: 'https://policy-vault.vercel.app',
    status: 'active',
    icon: 'document',
    metrics: [
      { label: 'Polityki', value: '280+' },
      { label: 'Pracownicy', value: '3,200+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
  {
    id: 'vendor-risk',
    title: 'Third-Party Risk Assessment',
    description: 'Platforma do oceny ryzyka dostawców third-party z scoringiem i monitoringiem.',
    longDescription: 'Kompleksowe narzędzie do zarządzania ryzykiem dostawców zewnętrznych. Automatyzuje proces due diligence, oceny ryzyka, monitorowania ciągłego i ponownej oceny okresowej zgodnie z wymaganiami DORA i ISO 27001.',
    tags: ['Third-Party Risk', 'Vendor Management', 'Due Diligence', 'DORA'],
    url: 'https://vendor-risk.vercel.app',
    status: 'active',
    icon: 'handshake',
    metrics: [
      { label: 'Dostawcy', value: '560+' },
      { label: 'Oceny rocznie', value: '890+' },
      { label: 'Uptime', value: '99.8%' },
    ],
  },
  {
    id: 'bcp-planner',
    title: 'BCP/DR Planner',
    description: 'Narzędzie do planowania ciągłości biznesowej i odtwarzania po awarii.',
    longDescription: 'Aplikacja wspierająca tworzenie i testowanie planów ciągłości biznesowej (BCP) oraz disaster recovery (DR). Zawiera moduły BIA (Business Impact Analysis), definicje RTO/RPO oraz scenariusze testowe.',
    tags: ['BCP', 'Disaster Recovery', 'BIA', 'Resilience'],
    url: 'https://bcp-planner.vercel.app',
    status: 'beta',
    icon: 'refresh',
    metrics: [
      { label: 'Plany BCP', value: '45' },
      { label: 'Testy rocznie', value: '60+' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
];
