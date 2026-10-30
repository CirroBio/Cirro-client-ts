import {
  AppRegistrationsApi,
  AuditApi,
  BillingApi,
  ComputeEnvironmentApi,
  Configuration,
  DashboardsApi,
  DatasetsApi,
  ExecutionApi,
  FeedApi,
  FileApi,
  GovernanceApi,
  MetadataApi,
  MetricsApi,
  ProcessesApi,
  ProjectRequestsApi,
  ProjectsApi,
  ReferencesApi,
  SharedFilesystemsApi,
  SharingApi,
  SheetsApi,
  SystemApi,
  ToolsApi,
  UsersApi,
  WorkspacesApi,
  FetchAPI
} from "@cirrobio/api-client";
import { generateApiConfig } from "../api/config";

interface DataServiceParams {
  /** Omit when `fetchApi` serves a publication, which needs no credentials. */
  tokenGetter?: () => Promise<string>;
  basePath?: string;
  /** Replaces `fetch` for every API request, e.g. with `createPublicationFetch`. */
  fetchApi?: FetchAPI;
}

export class DataService {
  private readonly apiConfig: Configuration;

  private readonly _appRegistrationsApi: AppRegistrationsApi;
  private readonly _auditApi: AuditApi;
  private readonly _billingApi: BillingApi;
  private readonly _computeEnvironmentApi: ComputeEnvironmentApi;
  private readonly _dashboardsApi: DashboardsApi;
  private readonly _datasetsApi: DatasetsApi;
  private readonly _executionApi: ExecutionApi;
  private readonly _feedApi: FeedApi;
  private readonly _fileApi: FileApi;
  private readonly _governanceApi: GovernanceApi;
  private readonly _metadataApi: MetadataApi;
  private readonly _metricsApi: MetricsApi;
  private readonly _processesApi: ProcessesApi;
  private readonly _projectRequestsApi: ProjectRequestsApi;
  private readonly _projectsApi: ProjectsApi;
  private readonly _referencesApi: ReferencesApi;
  private readonly _sharedFilesystemsApi: SharedFilesystemsApi;
  private readonly _sharingApi: SharingApi;
  private readonly _sheetsApi: SheetsApi;
  private readonly _systemApi: SystemApi;
  private readonly _toolsApi: ToolsApi;
  private readonly _usersApi: UsersApi;
  private readonly _workspacesApi: WorkspacesApi;

  constructor({ tokenGetter, basePath = "/api", fetchApi }: DataServiceParams) {
    this.apiConfig = generateApiConfig({ basePath, tokenGetter, fetchApi });

    this._appRegistrationsApi = new AppRegistrationsApi(this.apiConfig);
    this._auditApi = new AuditApi(this.apiConfig);
    this._billingApi = new BillingApi(this.apiConfig);
    this._computeEnvironmentApi = new ComputeEnvironmentApi(this.apiConfig);
    this._dashboardsApi = new DashboardsApi(this.apiConfig);
    this._datasetsApi = new DatasetsApi(this.apiConfig);
    this._executionApi = new ExecutionApi(this.apiConfig);
    this._feedApi = new FeedApi(this.apiConfig);
    this._fileApi = new FileApi(this.apiConfig);
    this._governanceApi = new GovernanceApi(this.apiConfig);
    this._metadataApi = new MetadataApi(this.apiConfig);
    this._metricsApi = new MetricsApi(this.apiConfig);
    this._processesApi = new ProcessesApi(this.apiConfig);
    this._projectRequestsApi = new ProjectRequestsApi(this.apiConfig);
    this._projectsApi = new ProjectsApi(this.apiConfig);
    this._referencesApi = new ReferencesApi(this.apiConfig);
    this._sharedFilesystemsApi = new SharedFilesystemsApi(this.apiConfig);
    this._sharingApi = new SharingApi(this.apiConfig);
    this._sheetsApi = new SheetsApi(this.apiConfig);
    this._systemApi = new SystemApi(this.apiConfig);
    this._toolsApi = new ToolsApi(this.apiConfig);
    this._usersApi = new UsersApi(this.apiConfig);
    this._workspacesApi = new WorkspacesApi(this.apiConfig);
  }

  get appRegistrations(): AppRegistrationsApi {
    return this._appRegistrationsApi;
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
  get dashboards(): DashboardsApi {
    return this._dashboardsApi;
  }
  get datasets(): DatasetsApi {
    return this._datasetsApi;
  }
  get execution(): ExecutionApi {
    return this._executionApi;
  }
  get feed(): FeedApi {
    return this._feedApi;
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
  get metrics(): MetricsApi {
    return this._metricsApi;
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
  get sharedFilesystems(): SharedFilesystemsApi {
    return this._sharedFilesystemsApi;
  }
  get sharing(): SharingApi {
    return this._sharingApi;
  }
  get sheets(): SheetsApi {
    return this._sheetsApi;
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
  get workspaces(): WorkspacesApi {
    return this._workspacesApi;
  }
}
