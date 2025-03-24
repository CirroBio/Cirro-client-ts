
/**
 * An array of file extensions that can be rendered in a genome viewer
 */
export const FILE_TRACK_ANNOTATION = ['bed', 'bed.gz', 'gtf', 'gtf.gz'];
export const FILE_TRACK_ALIGNMENTS = ['cram', 'cram.gz'];  // TODO: put back bam
export const FILE_TRACK_VARIANT = ['vcf', 'vcf.gz'];
export const FILE_TRACK_WIG = ['wig', 'wig.gz', 'bw', 'bw.gz', 'bigwig', 'bigwig.gz'];
export const FILE_TRACK_SEG = ['seg', 'seg.gz'];
export const FILE_TRACK_INDEX_EXTENSIONS = ['tbi', 'bai', 'crai', 'csi'];
export const FILE_VITESSCE_EXTENSIONS = ['hdf5', 'h5ad', 'loom'];
export const FILE_TRACK_EXTENSIONS_NO_INDEX = [
    ...FILE_TRACK_ANNOTATION,
    ...FILE_TRACK_ALIGNMENTS,
    ...FILE_TRACK_VARIANT,
    ...FILE_TRACK_WIG,
    ...FILE_TRACK_SEG
];
export const FILE_TRACK_EXTENSIONS = [
    ...FILE_TRACK_EXTENSIONS_NO_INDEX,
    ...FILE_TRACK_INDEX_EXTENSIONS
]


export const FILE_BROWSER_EXTENSIONS = ['html', 'pdf'];


/**
 * An array of file extensions that are protein structure files.
 */
export const FILE_PROTEIN_STRUCTURE_EXTENSIONS = ['pdb', 'pdb.gz', 'cif', 'cif.gz', 'ent', 'ent.gz', 'mmtf', 'mmtf.gz'];
/**
 * An array of file extensions that are considered tabular files.
 */
export const FILE_DSV_EXTENSIONS = ['tab', 'csv', 'tsv', 'dsv'];
/**
 * An array of file extensions that contain genomic sequence content.
 */
export const FILE_TXT_GENOMICS_EXTENSIONS = ['fasta', 'fna', 'fsa', 'fa', 'fastp', 'fastq', 'faa', 'gbk', 'gff', 'vcf', 'seq'];

/**
 * An array of file extensions that are considered TXT files.
 */
export const FILE_TXT_EXTENSIONS = ['txt', 'log', 'yml', 'cfg', 'config', 'xml', 'yaml', ...FILE_DSV_EXTENSIONS, ...FILE_TXT_GENOMICS_EXTENSIONS];


/**
 * An array of file extensions that are considered image files.
 */
export const FILE_IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'svg'];

/**
 * An array of file extensions that are considered OME (Open Microscopy Environment) files.
 */
export const FILE_OME_EXTENSIONS = ['tif', 'ome.tif', 'ome.tiff', 'ome.tif.gz', 'ome.tiff.gz'];

/**
 * An array of file extensions that can be opened in the browser.
 * Includes common document formats such as HTML, PDF, and JSON, as well as image, DSV, TXT, and OME file formats.
 */
export const FILE_EXTENSIONS_TO_OPEN = ['html', 'pdf', 'json', 'fcs',
    ...FILE_IMAGE_EXTENSIONS,
    ...FILE_TXT_EXTENSIONS,
    ...FILE_TRACK_EXTENSIONS,
    ...FILE_PROTEIN_STRUCTURE_EXTENSIONS
];


/**
 * Checks if a file has an extension that matches one in the provided list.
 * @param filePath The file to check the extension of.
 * @param extensions A list of file endings to check the file against.
 * @returns True or false if the file has an ending in the extensions list.
 */
export function matchesExtension(filePath: string, extensions: string[]): boolean {
    filePath = filePath.toLowerCase();

    // Decompress the filePath if it ends with .gz
    if (filePath.endsWith('.gz')) {
        filePath = filePath.slice(0, -3);  // remove the .gz extension
    }

    // Now, get the extension of the file
    const fileExtension = filePath.slice(filePath.lastIndexOf('.') + 1);

    // Check if the fileExtension is in the list of extensions
    return extensions.includes(fileExtension);
}
