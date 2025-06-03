import { DatasetAssetsManifest, FileEntry } from '@cirrobio/api-client';
import { Assets } from "./models/assets";
import { Folder } from "./models/folder";
import { File } from "./models/file";
import { ProjectFileAccessContext } from "./project-access-context";
import { removeEndingSlash } from "../formatters";


export class ManifestParser {
  private readonly manifest: DatasetAssetsManifest;
  private readonly accessContext: ProjectFileAccessContext;

  constructor(manifest: DatasetAssetsManifest, accessContext?: ProjectFileAccessContext) {
    this.manifest = manifest;
    this.accessContext = accessContext;
  }

  private get files(): Array<FileEntry> {
    return this.manifest?.files ?? [];
  }

  /**
   * Generates asset objects from the manifest, optionally including folder entries.
   */
  public generateAssets(generateFolders = false): Assets {
    const domain = removeEndingSlash(this.manifest?.domain);
    const assets = new Assets();

    for (const file of this.files) {
      assets.push(new File(domain, file.path, file.size, file.metadata, this.accessContext));
    }

    // Optionally add folder entries
    if (generateFolders) {
      assets.push(...this.generateFolderAssets(assets, domain));
    }

    return assets;
  }

  // Create folder entries, useful for visualizing folders as items in a file browser
  private generateFolderAssets(assets: Assets, domain: string): Folder[] {
    const folderSet = new Set<string>();

    // Collect all unique folder paths
    for (const asset of assets) {
      const parts = asset.path.split('/').filter(p => p.length > 0);
      let currentPath = '';
      for (const part of parts) {
        currentPath = currentPath ? `${currentPath}/${part}` : part;
        folderSet.add(currentPath);
      }
    }

    // Create Folder objects from unique paths
    return Array.from(folderSet)
      .map(folderPath => {
        const name = folderPath.substring(folderPath.lastIndexOf('/') + 1);
        const parentPath = folderPath.includes('/') ? folderPath.substring(0, folderPath.lastIndexOf('/')) : '';
        return new Folder(folderPath, name, parentPath, domain);
      });
  }
}
