/**
 * Internationalization (i18n) helper for Tarra Lanzilli.
 *
 * Default language = 'nl' (Dutch, no prefix).
 * Other languages: 'en' (/en/...), 'es' (/es/...).
 */

import nlHome from '../content/home.json';
import enHome from '../content/en/home.json';
import esHome from '../content/es/home.json';

import nlSite from '../content/site.json';
import enSite from '../content/en/site.json';
import esSite from '../content/es/site.json';

import nlCeremonies from '../content/ceremonies.json';
import enCeremonies from '../content/en/ceremonies.json';
import esCeremonies from '../content/es/ceremonies.json';

import nlErvaringen from '../content/ervaringen.json';
import enErvaringen from '../content/en/ervaringen.json';
import esErvaringen from '../content/es/ervaringen.json';

import nlOver from '../content/over-mij.json';
import enOver from '../content/en/over-mij.json';
import esOver from '../content/es/over-mij.json';

import nlContact from '../content/contact.json';
import enContact from '../content/en/contact.json';
import esContact from '../content/es/contact.json';

import nlIntake from '../content/intake.json';
import enIntake from '../content/en/intake.json';
import esIntake from '../content/es/intake.json';

export const defaultLang = 'nl' as const;
export const languages = ['nl', 'en', 'es'] as const;
export type Lang = (typeof languages)[number];

export const langLabels: Record<Lang, string> = {
  nl: 'NL',
  en: 'EN',
  es: 'ES',
};

export const langNames: Record<Lang, string> = {
  nl: 'Nederlands',
  en: 'English',
  es: 'Español',
};

export const ogLocales: Record<Lang, string> = {
  nl: 'nl_NL',
  en: 'en_US',
  es: 'es_ES',
};

export const uiStrings = {
  nl: {
    links: 'Navigatie',
    aanbod: 'Ceremonies',
    contact: 'Contact',
    intake: 'Intakeformulier',
    agenda: 'Bekijk de agenda',
    rechten: 'Alle rechten voorbehouden.',
    openMenu: 'Open menu',
    sluitMenu: 'Sluit menu',
    toonCeremonies: 'Toon de ceremonies',
    naarHomepage: 'naar de homepage',
    gaNaarInhoud: 'Ga naar de inhoud',
    whatsappSr: 'Stuur een WhatsApp-bericht (opent in een nieuw venster)',
    taalKiezen: 'Kies een taal',
    socialsKnopSr: 'Social media & contactopties openen',
    socialsSluitenSr: 'Social media menu sluiten',
    socialsTitel: 'Verbinden met Nathalie',
    whatsappTitel: 'WhatsApp',
    instagramTitel: 'Instagram',
    instagramSub: '@tarralanzilli',
    emailTitel: 'E-mail',
  },
  en: {
    links: 'Navigation',
    aanbod: 'Ceremonies',
    contact: 'Contact',
    intake: 'Intake form',
    agenda: 'View schedule',
    rechten: 'All rights reserved.',
    openMenu: 'Open menu',
    sluitMenu: 'Close menu',
    toonCeremonies: 'Show ceremonies',
    naarHomepage: 'to the homepage',
    gaNaarInhoud: 'Skip to content',
    whatsappSr: 'Send a WhatsApp message (opens in a new window)',
    taalKiezen: 'Choose language',
    socialsKnopSr: 'Open social media & contact options',
    socialsSluitenSr: 'Close social media menu',
    socialsTitel: 'Connect with Nathalie',
    whatsappTitel: 'WhatsApp',
    instagramTitel: 'Instagram',
    instagramSub: '@tarralanzilli',
    emailTitel: 'Email',
  },
  es: {
    links: 'Navegación',
    aanbod: 'Ceremonias',
    contact: 'Contacto',
    intake: 'Formulario de admisión',
    agenda: 'Ver agenda',
    rechten: 'Todos los derechos reservados.',
    openMenu: 'Abrir menú',
    sluitMenu: 'Cerrar menú',
    toonCeremonies: 'Mostrar ceremonias',
    naarHomepage: 'ir a la página principal',
    gaNaarInhoud: 'Ir al contenido',
    whatsappSr: 'Enviar un mensaje por WhatsApp (se abre en una ventana nueva)',
    taalKiezen: 'Elegir idioma',
    socialsKnopSr: 'Abrir redes sociales y opciones de contacto',
    socialsSluitenSr: 'Cerrar menú de redes sociales',
    socialsTitel: 'Conectar con Nathalie',
    whatsappTitel: 'WhatsApp',
    instagramTitel: 'Instagram',
    instagramSub: '@tarralanzilli',
    emailTitel: 'Correo',
  },
} as const;

/** Extract language from a URL pathname. */
export function getLangFromUrl(pathname: string): Lang {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg && languages.includes(seg as Lang) && seg !== defaultLang) {
    return seg as Lang;
  }
  return defaultLang;
}

/** Build a localised path. Dutch (default) gets no prefix. */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}

/** Switch the language of the current pathname. */
export function switchLangUrl(currentPathname: string, targetLang: Lang): string {
  let cleanPath = currentPathname;
  for (const l of languages) {
    if (l !== defaultLang && (cleanPath === `/${l}` || cleanPath.startsWith(`/${l}/`))) {
      cleanPath = cleanPath.slice(l.length + 1) || '/';
      break;
    }
  }
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  if (!cleanPath.endsWith('/')) cleanPath = cleanPath + '/';

  if (targetLang === defaultLang) {
    return cleanPath;
  }
  return `/${targetLang}${cleanPath === '/' ? '/' : cleanPath}`;
}

/** Get all content and translations for a given language. */
export function getContent(lang: Lang) {
  return {
    home: lang === 'es' ? esHome : lang === 'en' ? enHome : nlHome,
    site: lang === 'es' ? esSite : lang === 'en' ? enSite : nlSite,
    ceremonies: lang === 'es' ? esCeremonies : lang === 'en' ? enCeremonies : nlCeremonies,
    ervaringen: lang === 'es' ? esErvaringen : lang === 'en' ? enErvaringen : nlErvaringen,
    overMij: lang === 'es' ? esOver : lang === 'en' ? enOver : nlOver,
    contact: lang === 'es' ? esContact : lang === 'en' ? enContact : nlContact,
    intake: lang === 'es' ? esIntake : lang === 'en' ? enIntake : nlIntake,
    ui: uiStrings[lang],
  };
}

/** Backward-compat helper if needed */
export async function loadContent<T>(file: string, lang: Lang): Promise<T> {
  const content = getContent(lang);
  if (file.includes('home')) return content.home as unknown as T;
  if (file.includes('site')) return content.site as unknown as T;
  if (file.includes('ceremonies')) return content.ceremonies as unknown as T;
  if (file.includes('ervaringen')) return content.ervaringen as unknown as T;
  return content.home as unknown as T;
}
