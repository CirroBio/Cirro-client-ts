import {
  AuditApi,
  BillingApi,
  ComputeEnvironmentApi,
  Configuration,
  DatasetsApi,
  ExecutionApi,
  FileApi,
  GovernanceApi,
  MetadataApi,
  NotebooksApi,
  ProcessesApi,
  ProjectRequestsApi,
  ProjectsApi,
  ReferencesApi,
  SharingApi,
  SystemApi,
  ToolsApi,
  UsersApi
} from "@cirrobio/api-client";
import { generateApiConfig } from "../api/config";

export class DataService {
  private readonly apiConfig: Configuration;

  private readonly _auditApi: AuditApi;
  private readonly _billingApi: BillingApi;
  private readonly _computeEnvironmentApi: ComputeEnvironmentApi;
  private readonly _datasetsApi: DatasetsApi;
  private readonly _executionApi: ExecutionApi;
  private readonly _fileApi: FileApi;
  private readonly _governanceApi: GovernanceApi;
  private readonly _metadataApi: MetadataApi;
  private readonly _notebooksApi: NotebooksApi;
  private readonly _processesApi: ProcessesApi;
  private readonly _projectRequestsApi: ProjectRequestsApi;
  private readonly _projectsApi: ProjectsApi;
  private readonly _referencesApi: ReferencesApi;
  private readonly _sharingApi: SharingApi;
  private readonly _systemApi: SystemApi;
  private readonly _toolsApi: ToolsApi;
  private readonly _usersApi: UsersApi;

  constructor(tokenGetter: () => Promise<string>, basePath: string) {
    this.apiConfig = generateApiConfig({ basePath, tokenGetter });

    this._auditApi = new AuditApi(this.apiConfig);
    this._billingApi = new BillingApi(this.apiConfig);
    this._computeEnvironmentApi = new ComputeEnvironmentApi(this.apiConfig);
    this._datasetsApi = new DatasetsApi(this.apiConfig);
    this._executionApi = new ExecutionApi(this.apiConfig);
    this._fileApi = new FileApi(this.apiConfig);
    this._governanceApi = new GovernanceApi(this.apiConfig);
    this._metadataApi = new MetadataApi(this.apiConfig);
    this._notebooksApi = new NotebooksApi(this.apiConfig);
    this._processesApi = new ProcessesApi(this.apiConfig);
    this._projectRequestsApi = new ProjectRequestsApi(this.apiConfig);
    this._projectsApi = new ProjectsApi(this.apiConfig);
    this._referencesApi = new ReferencesApi(this.apiConfig);
    this._sharingApi = new SharingApi(this.apiConfig);
    this._systemApi = new SystemApi(this.apiConfig);
    this._toolsApi = new ToolsApi(this.apiConfig);
    this._usersApi = new UsersApi(this.apiConfig);
  }

  get audit(): AuditApi {
    return this._auditApi;
  }
  get billing(): BillingApi {
    return this._billingApi;
  }
  get computeEnvironments(): ComputeEnvironmentApi {
    return this._computeEnvironmentApi;
  }
  get datasets(): DatasetsApi {
    return this._datasetsApi;
  }
  get execution(): ExecutionApi {
    return this._executionApi;
  }
  get file(): FileApi {
    return this._fileApi;
  }
  get governance(): GovernanceApi {
    return this._governanceApi;
  }
  get metadata(): MetadataApi {
    return this._metadataApi;
  }
  get notebooks(): NotebooksApi {
    return this._notebooksApi;
  }
  get processes(): ProcessesApi {
    return this._processesApi;
  }
  get projectRequests(): ProjectRequestsApi {
    return this._projectRequestsApi;
  }
  get projects(): ProjectsApi {
    return this._projectsApi;
  }
  get references(): ReferencesApi {
    return this._referencesApi;
  }
  get sharing(): SharingApi {
    return this._sharingApi;
  }
  get system(): SystemApi {
    return this._systemApi;
  }
  get tools(): ToolsApi {
    return this._toolsApi;
  }
  get users(): UsersApi {
    return this._usersApi;
  }
}
