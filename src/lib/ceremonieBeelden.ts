import overzicht from '../assets/ceremonie-overzicht-bos.webp';
import truffel from '../assets/ceremonie-truffel-bos.webp';
import paddenstoel from '../assets/ceremonie-paddenstoel-bos.webp';
import ayahuasca from '../assets/ceremonie-ayahuasca-bos.webp';
import ademwerk from '../assets/ceremonie-ademwerk-ven.webp';

/** Sfeerbeelden per ceremonie (op slug). Vervang de bestanden in src/assets om de foto's te wisselen. */
export const ceremonieBeelden: Record<string, ImageMetadata> = {
  truffelceremonie: truffel,
  paddenstoelenceremonie: paddenstoel,
  ayahuascaceremonie: ayahuasca,
  ademwerk: ademwerk,
};

export const overzichtBeeld: ImageMetadata = overzicht;
