/* tslint:disable */


export interface Query {


  allSitePage: SitePageConnection
    | null;


  allSitePlugin: SitePluginC
  onnection
  |
  null;


  allDirectory: Dire
  ctoryConnection
  |
  null;


  allFile: FileConnection | null;


  allImageSharp: ImageS
  harpConnection
  |
  null;


  allMarkdownRemark: MarkdownRemarkConnection | null;


  allAuthorJson: AuthorJsonConnection |
    null;


  sitePage: SitePage | null;


  sitePlugin: SitePlugin | null;


  site: Site | null;


  directory: Directory | null;


  file: File | null;


  imageSharp: ImageSharp | null;


  markdownRemark: MarkdownRemark | null;


  authorJson: AuthorJson | null;


}


export interface AllSitePageQueryArgs {


  skip: number | null;


  limit: number | null;


  sort: sitePageConnectionSort | null;


  filter: filterSitePage | null;


}


export interface AllSitePluginQueryArgs {


  skip: number | null;


  limit: number | null;


  sort: sitePluginConnectionSort | null;


  filter: filterSitePlugin | null;


}


export interface AllDirectoryQueryArgs {


  skip: number | null;


  limit: number | null;


  sort: directoryConnectionSort | null;


  filter: filterDirectory | null;


}


export interface AllFileQueryArgs {


  skip: number | null;


  limit: number | null;


  sort: fileConnectionSort | null;


  filter: filterFile | null;


}


export interface AllImageSharpQue

ryArgs
{


  skip: number | null;


  limit: number | null;


  sort: imageSharpConnectionSort | null;


  filter: filterImageSharp | null;


}


export interface AllMarkdownRemarkQueryA

rgs
{


  skip: number | null;


  limit: number | null;


  sort: markdownRemarkConnectionSort | null;


  filter: filterMarkdownRemark | null;


}


export interface AllAuthorJsonQueryArgs {


  skip: number | null;


  limit: number | null;


  sort: authorJsonConnectionSort | null;


  filter: filterAuthorJson | null;


}


export interface SitePageQueryArgs {


  jsonName: sitePageJsonNameQueryString | null;


  internalComponentName: sitePageInternal
  ComponentNameQueryString
  |
  null;


  path: sitePagePathQueryString_2 | null;


  component: sitePageComponentQueryString | null;


  componentChunkName: sitePageComponentChunkName
  QueryString
  |
  null;


  context: site
  PageContextInputObject
  |
  null;


  pluginCreator: sit
  ePagePluginCreatorInputObject
  |
  null;


  plugin
  CreatorId: sitePagePluginCreatorIdQueryString_2 | null;


  componentPath: sitePageCom
  ponentPathQueryString
  |
  null;


  id: sitePageIdQueryString_2 | null;


  internal: sitePageInternalInputObject_2 | null;


}


export interface SitePluginQueryArgs {


  resolve: sitePluginResolveQueryString_2 | null;


  id: sitePluginIdQu
  eryString_2
  |
  null;


  name: sitePluginNameQuery
  String_2
  |
  null;


  version: sitePlugi
  nVersionQueryString_2
  |
  null;


  pluginOptions: sitePlugin
  PluginOptionsInputObject_2
  |
  null;


  nodeAPIs: sitePlug
  inNodeApIsQueryList_2
  |
  null;


  browserAPIs: sitePluginBr
  owserApIsQueryList_2
  |
  null;


  ssrAPIs: sitePlugi
  nSsrApIsQueryList_2
  |
  null;


  pluginFilepath: sitePlugi
  nPluginFilepathQueryString_2
  |
  null;


  packageJson: siteP
  luginPackageJsonInputObject_2
  |
  null;


  internal: sitePluginInter
  nalInputObject_2
  |
  null;


}


export interface SiteQueryArgs {


  siteMetadata: siteSiteMetadataInputObject_2 | null;


  port: sitePortQuerySt
  ring_2
  |
  null;


  host: siteHostQueryString_2 | null;


  mapping: siteMappingI
  nputObject_2
  |
  null;


  pathPrefix: sitePathPrefixQueryString_2 | null;


  polyfill: sitePoly
  fillQueryBoolean_2
  |
  null;


  buildTime: siteBuildTimeQ
  ueryString_2
  |
  null;


  id: siteIdQueryString_2 | null;


  internal: siteInternalInputObject_2 | null;


}


export interface DirectoryQueryArgs {


  id: directoryIdQueryString_2 | null;


  internal: director
  yInternalInputObject_2
  |
  null;


  sourceInstanceName: directorySourceInstanceNameQueryString_2 | null;


  absolutePath: dire
  ctoryAbsolutePathQueryString_2
  |
  null;


  relativePath: directoryRelativePathQueryString_2 | null;


  extension: directo
  ryExtensionQueryString_2
  |
  null;


  size: directorySizeQueryInteger_2 | null;


  prettySize: direct
  oryPrettySizeQueryString_2
  |
  null;


  modifiedTime: directoryModifiedTimeQueryString_2 | null;


  accessTime: directoryAccessTimeQueryString_2 | null;


  changeTime: directoryChangeTimeQueryString_2 | null;


  birthTime: directoryBirthTimeQueryString_2 | null;


  root: directoryRootQueryString_2 | null;


  dir: directoryDirQueryString_2 | null;


  base: directoryBaseQueryString_2 | null;


  ext: directoryExtQueryString_2 | null;


  name: directoryNameQueryString_2 | null;


  relativeDirectory:
    directoryRelativeDirectoryQueryString_2 | null;


  dev: directoryDevQueryInt
  eger_2
  |
  null;


  mode: directoryMod
  eQueryInteger_2
  |
  null;


  nlink: directoryNlinkQuer
  yInteger_2
  |
  null;


  uid: directoryUidQ
  ueryInteger_2
  |
  null;


  gid: directoryGidQueryInt
  eger_2
  |
  null;


  rdev: directoryRde
  vQueryInteger_2
  |
  null;


  blksize: directoryBlksize
  QueryInteger_2
  |
  null;


  ino: directoryInoQueryInteger_2 | null;


  blocks: directoryBlocksQueryInteger_2 | null;


  atimeMs: directoryA
  timeMsQueryFloat_2
  |
  null;


  mtimeMs: directoryMtimeMsQueryFloat_2 | null;


  ctimeMs: directory
  CtimeMsQueryFloat_2
  |
  null;


  birthtimeMs: directoryBirthtimeMsQueryFloat_2 | null;


  atime: directoryAt
  imeQueryString_2
  |
  null;


  mtime: directoryMtimeQueryString_2 | null;


  ctime: directoryCt
  imeQueryString_2
  |
  null;


  birthtime: directoryBirthtimeQueryString_2 | null;


}


export interface FileQ

ueryArgs
{


  id: fileIdQueryString_2 | null;


  internal: fileInte
  rnalInputObject_2 | null;


  sourceInstanceName: fileSourceInstanceNameQueryString_2 | null;


  absolutePath: file
  AbsolutePathQueryString_2 | null;


  relativePath: fileRelativePathQueryString_2 | null;


  extension: fileExt
  ensionQueryString_2 | null;


  size: fileSizeQueryInteger_2 | null;


  prettySize: filePre
  ttySizeQueryString_2 | null;


  modifiedTime: fileModifiedTimeQueryString_2 | null;


  accessTime: fileAccessTimeQueryString_2 | null;


  changeTime: fileCha
  ngeTimeQueryString_2 | null;


  birthTime: fileBirthTimeQueryString_2 | null;


  root: fileRootQuery
  String_2 | null;


  dir: fileDirQueryString_2 | null;


  base: fileBaseQuer
  yString_2 | null;


  ext: fileExtQueryString_2 | null;


  name: fileNameQuer
  yString_2 | null;


  relativeDirectory: fileRelativeDirectoryQueryString_2 | null;


  dev: fileDevQueryI
  nteger_2 | null;


  mode: fileModeQueryInteger_2 | null;


  nlink: fileNlinkQu
  eryInteger_2 | null;


  uid: fileUidQueryInteger_2 | null;


  gid: fileGidQueryI
  nteger_2 | null;


  rdev: fileRdevQueryInteger_2 | null;


  blksize: fileBlksi
  zeQueryInteger_2 | null;


  ino: fileInoQueryInteger_2 | null;


  blocks: fileBlocksQ
  ueryInteger_2 | null;


  atimeMs: fileAtimeMsQueryFloat_2 | null;


  mtimeMs: fileMtimeMs
  QueryFloat_2 | null;


  ctimeMs: fileCtimeMsQueryFloat_2 | null;


  birthtimeMs: fileBir
  thtimeMsQueryFloat_2 | null;


  atime: fileAtimeQueryString_2 | null;


  mtime: fileMtimeQuer
  yString_2 | null;


  ctime: fileCtimeQueryString_2 | null;


  birthtime: fileBirth
  timeQueryString_2 | null;


  publicURL: publicUrlQueryString_3 | null;


}


export interface ImageSharpQueryArgs {


  id: imageSharpIdQueryString_2 | null;


  internal: imageSharpInternalInputObject_2 | null;


  fixed: fixedTypeName
  _3
  |
  null;


  resolutions: resolutionsTypeName_3 | null;


  fluid: fluidTypeName
  _3
  |
  null;


  sizes: sizesTypeName_3 | null;


  original: originalTy
  peName_3
  |
  null;


  resize: resizeTypeName_3 | null;


}


e
xport

interface MarkdownRemarkQueryArgs {


  id: markdownRemarkIdQueryString_2 | null;


  internal: markdownRe
  markInternalInputObject_2
  |
  null;


  frontmatter: markdownRemarkFrontmatterInputObject_2 | null;


  excerpt: excerptQueryString_3 | null;


  rawMarkdownBody: markdownRemarkRawMarkdownBodyQueryString_2 | null;


  fileAbsolutePath: mar
  kdownRemarkFileAbsolutePathQueryString_2
  |
  null;


  fields: markdownRemarkFieldsInputObject_2 | null;


  html: htmlQueryString
  _3
  |
  null;


  headings: headingsQueryList_3 | null;


  timeToRead: timeToReadQueryInt_3 | null;


  tableOfContents: tableOfContentsQueryString_3 | null;


  wordCount: wordCou
  ntTypeName_3
  |
  null;


}


export interface AuthorJsonQueryArgs {


  id: authorJsonIdQu
  eryString_2
  |
  null;


  bio: authorJsonBioQueryString_2 | null;


  avatar: authorJsonAvatarQueryString_2 | null;


  twitter: authorJsonTwitterQueryString_2 | null;


  github: authorJson
  GithubQueryString_2
  |
  null;


  internal: authorJsonInter
  nalInputObject_2
  |
  null;


}


export interface sitePa

geConnectionSort
{


  fields: Array < SitePageCon
  nectionSortByFieldsEnum >;


  order: sitePageCon
  nectionSortOrderValues | null;


}


export type SitePageConnectionSortByFieldsEnum =


  | 'jsonName'


  | 'internalComponentN
ame
'


| 'path'


| 'component'


| 'componentChunkName'


| 'context___slug'


| 'context___tag'


| 'context___skip'


| 'pluginCreator___NO
DE
'


| 'pluginCreatorId'


| 'componentPath'


| 'id'


| 'parent'


| 'internal___type'


| 'internal___contentDigest'


| 'internal___desc
ription
'


| 'internal___owner';


export type sitePageConnectionSortOrderValues = 'ASC' | 'DESC';


export interface filter

SitePage
{


  jsonName: sitePageConnect
  ionJsonNameQueryString | null;


  internalComponentN
  ame: sitePageConnectionInternalComponentNameQueryString | null;


  path: sitePageConnectionP
  athQueryString_2 | null;


  component: sitePag
  eConnectionComponentQueryString | null;


  componentChunkName: siteP
  ageConnectionComponentChunkNameQueryString | null;


  context: sitePageConnectionContextInputObject | null;


  pluginCreator: sitePageConnectionPluginCreatorInputObject | null;


  pluginCreatorId: s
  itePageConnectionPluginCreatorIdQueryString_2 | null;


  componentPath: sitePageConnectionComponentPathQueryString | null;


  id: sitePageConnec
  tionIdQueryString_2 | null;


  internal: sitePageConnectionInternalInputObject_2 | null;


}


export interface siteP

ageConnectionJsonNameQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageConnectionInternalCom

ponentNameQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface sitePageConnectionP

athQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePage

ConnectionComponentQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageConnectio

nComponentChunkNameQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null
  ;


}


export interface sitePageConn

ectionContextInputObject
{


  slug: sitePageConnec
  tionContextSlugQueryString | null;


  tag: sitePageConnectionContextTagQueryString | null
  ;


  skip: sitePageConnectionContext
  SkipQueryInteger | null;


}


export interface siteP

ageConnectionContextSlugQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageCo

nnectionContextTagQueryString
{


  eq: string |
  null;


  ne: string | null;


  regex:
    string | null;


  glob: string | null;


in:
  Array < st
  ring > | null;


}


export interface si

tePageConnectionContextSkipQueryInteger
{


  eq: number | null;


  ne: number
  | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> | null;


}


export
interf
ace
sitePageConnectionPluginCreatorInputObject
{


  resolve:
    sitePageConnectionPluginCreatorResolveQueryString | null;


  id: sitePageConnectionPl
  uginCreatorIdQueryString | null;


  name: sitePageConnectionPlugin
  CreatorNameQueryString | null;


  version: sitePageConnectionPl
  uginCreatorVersionQueryString | null;


  pluginOptions: sitePageConnec
  tionPluginCreatorPluginOptionsInputObject | null;


  nodeAPIs: sitePage
  ConnectionPluginCreatorNodeApIsQueryList | null;


  browserAPIs: sitePageC
  onnectionPluginCreatorBrowserApIsQueryList | null;


  ssrAPIs: sitePageConnectionPlugin
  CreatorSsrApIsQueryList | null;


  pluginFilepath: sitePageConn
  ectionPluginCreatorPluginFilepathQueryString | null;


  packageJson: sitePageConnectionPluginCreatorPackageJsonInputObj
  ect | null;


  parent: sitePageConnectionPluginCreatorParentQu
  eryString | null;


  internal: sitePageConnectionPluginCreatorInternalInputObj
  ect | null;


}


e
xport

interface sitePageConnectionPluginCreatorResolveQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface sitePageConnectionPluginCreatorIdQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePageConnectionPluginCreatorNameQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePageCo

nnectionPluginCreatorVersionQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageCo

nnectionPluginCreatorPluginOptionsInputObject
{


  plugins: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;


  name: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;


  path: sitePageConn
  ectionPluginCreatorPluginOptionsPathQueryString | null;


  trackingId: sitePag
  eConnectionPluginCreatorPluginOptionsTrackingIdQueryString | null;


  head: sitePageConnectionPluginCreatorPluginOptionsHeadQueryBoolean | null;


  anonymize: sitePageC
  onnectionPluginCreatorPluginOptionsAnonymizeQueryBoolean | null;


  respectDNT: sitePageConnectionPluginCreatorPluginOptionsRespectDntQueryBoolean
  | null;


  maxWidth: sitePageCo
  nnectionPluginCreatorPluginOptionsMaxWidthQueryInteger | null;


  backgroundColor: sitePageConnectionPluginCreatorPluginOptionsBackgroundColo
  rQueryString | null;


  short_name: sitePage
  ConnectionPluginCreatorPluginOptionsShortNameQueryString | null;


  start_url: sitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null;


  background_color: si
  tePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;


  theme_color: sitePageConnectionPluginCreatorPluginOptionsThemeColor
  QueryString | null;


  display: sitePageCon
  nectionPluginCreatorPluginOptionsDisplayQueryString | null;


  pathCheck: sitePageConnectionPluginCreatorPluginOptionsPathCheckQue
  ryBoolean | null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {


  elemMatch: sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject
    | null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {


  resolve: sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQ
  ueryString
  |
  null;


  id: sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null;


  name: sitePageConne
  ctionPluginCreatorPluginOptionsPluginsNameQueryString
  |
  null;


  version: sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQuerySt
  ring
  |
  null;


  pluginOptions: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;


  browserAPIs: siteP
  ageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  |
  null;


  ssrAPIs: sitePageCo
  nnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList
  |
  null;


  pluginFilepath: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilep
  athQueryString
  |
  null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePageConnectionPluginCreatorPluginOpti

onsPluginsNameQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface sitePageConnectionPluginCreatorPluginOptionsPlugi

nsVersionQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface siteP

ageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject
{


  maxWidth: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;


  backgroundColor: s
  itePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;


}


export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPl

uginOptionsMaxWidthQueryInteger
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> | null;


}


export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePageCo

nnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | nul
  l;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePageConnectionP

luginCreatorPluginOptionsPathQueryString
{


  eq: string | null;


  ne: string | null;


  regex: stri
  ng | null;


  glob: string | null;


in:
  Array<string> | null
  ;


}


export interface sitePageConnec

tionPluginCreatorPluginOptionsTrackingIdQueryString
{


  eq: string | null;


  ne: string | nu
  ll;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageConnecti

onPluginCreatorPluginOptionsHeadQueryBoolean
{


  eq: bo
  olean | null;


  ne: boolean | null;


in:
  Array<boolean> | null;


}


export interface sitePageConnectionPlu

ginCreatorPluginOptionsAnonymizeQueryBoolean
{


  eq: boolean | null;


  ne: boolean
  | null;


in:
  Array<boolean> | null
  ;


}


export interface sitePageConnectionP

luginCreatorPluginOptionsRespectDntQueryBoolean
{


  eq: boolea
  n | null;


  ne: boolean | null;


in:
  Array<boolean> |
  null;


}


export interface sitePageC

onnectionPluginCreatorPluginOptionsMaxWidthQueryInteger
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | nul
  l;


  lte: number |
  null;


in:
  Array < num
  ber > | null;


}


export interface sitePa

geConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
{


  eq: stri
  ng | null;


  ne: stri
  ng | null;


  regex: stri
  ng | null;


  glob: str
  ing | null;


in:
  Array<string> | null;


}


export interface sitePageConnectionPluginCreatorPluginOptionsShortNameQueryStrin

g
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageConnectionPluginCreatorPluginOpt

ionsStartUrlQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface sitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface site

PageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
{


  eq: boolean | null;


  ne: boolean | null
  ;


in:
  Array<boolean> | null;


}


export interface siteP

ageConnectionPluginCreatorNodeApIsQueryList
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface siteP

ageConnectionPluginCreatorBrowserApIsQueryList
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface siteP

ageConnectionPluginCreatorSsrApIsQueryList
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface siteP

ageConnectionPluginCreatorPluginFilepathQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | nul
  l;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface sitePageConnectionPluginCreatorPackageJs

onInputObject
{


  name: sitePageConn
  ectionPluginCreatorPackageJsonNameQueryString | null;


  description: sitePa
  geConnectionPluginCreatorPackageJsonDescriptionQueryString | null;


  version: sitePageConnectionPluginCreatorPackageJsonVe
  rsionQueryString | null;


  main: sitePageConne
  ctionPluginCreatorPackageJsonMainQueryString | null;


  license: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;


  dependencies: site
  PageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;


  devDependencies: si
  tePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;


  peerDependencies: sitePageConnectionPluginCreatorPacka
  geJsonPeerDependenciesQueryList | null;


  keywords: sitePageC
  onnectionPluginCreatorPackageJsonKeywordsQueryList | null;


}


export interface sitePageConnectionPluginCreatorPackageJson

NameQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null
  ;


in:
  Array<string> | null;


}


export interface site

PageConnectionPluginCreatorPackageJsonDescriptionQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | nul
  l;


  glob: string | null;


in:
  Array<string>
  | null;


}


e
xport

interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


  in: Array<string> |
    null;


}


export interface sit

ePageConnectionPluginCreatorPackageJsonMainQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface sit

ePageConnectionPluginCreatorPackageJsonLicenseQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageConnect

ionPluginCreatorPackageJsonDependenciesQueryList
{


  elemMatch: sitePageConn
  ectionPluginCreatorPackageJsonDependenciesInputObject | null;


}


export interface siteP

ageConnectionPluginCreatorPackageJsonDependenciesInputObject
{


  name: sitePageConnectionPlugi
  nCreatorPackageJsonDependenciesNameQueryString | null;


  version: sitePageConnecti
  onPluginCreatorPackageJsonDependenciesVersionQueryString | null;


}


export interface sitePage

ConnectionPluginCreatorPackageJsonDependenciesNameQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | nul
  l;


  glob: string | null
  ;


in:
  Array<string> | nul
  l;


}


e
xport

interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePageConne

ctionPluginCreatorPackageJsonDevDependenciesQueryList
{


  elemMatch: sitePageConnect
  ionPluginCreatorPackageJsonDevDependenciesInputObject | null;


}


export interface sitePageC

onnectionPluginCreatorPackageJsonDevDependenciesInputObject
{


  name: sitePageConnecti
  onPluginCreatorPackageJsonDevDependenciesNameQueryString | null;


  version: sitePageConnectionP
  luginCreatorPackageJsonDevDependenciesVersionQueryString | null;


}


export interface sitePageConnectionPl

uginCreatorPackageJsonDevDependenciesNameQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export
i
nterface
sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
{


  eq: string | null;


  ne: string | null;


  regex: s
  tring | null;


  glob: string |
  null;


in:
  Arra
  y<string> | null;


}


export
inte
rface
sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
{


  elemMat
  ch: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;


}


export
interf
ace
sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
{


  name: sitePageC
  onnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;


  version: siteP
  ageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;


}


export interface site

PageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
{


  eq: string | null;


  ne: string |
  null;


  regex: string
  | null;


  glob: s
  tring | null;


in:
  Array<string> | n
  ull;


}


export
int
erface
sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
{


  eq: str
  ing | null;


  ne: string
  | null;


  regex: st
  ring | null;


  glob: string | null
  ;


in:
  Array<string> | null;


}


export interface sitePageConn

ectionPluginCreatorPackageJsonKeywordsQueryList
{


  eq: string | null;


  ne: string | null;


  regex: strin
  g | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageConnectionPluginCreatorParentQueryString {


  eq: string |
    null;


  ne: str
  ing
  |
  null;


  regex: s
  tring
  |
  null;


  glob: st
  ring
  |
  null;


  in: Array < s
  tring
  > |
  null;


}


export
inte
rface
sitePageConnectionPluginCreatorInternalInputObject
{


  contentDigest:
    sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;


  type: sitePageConnectionPlu
  ginCreatorInternalTypeQueryString | null;


  owner: sitePageConnectionPluginCreatorInternalOwnerQueryStrin
  g | null;


}


export interface sitePageConnectionPluginCreatorInternalCon

tentDigestQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageConnectionPluginCreatorI

nternalTypeQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePa

geConnectionPluginCreatorInternalOwnerQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sitePa

geConnectionPluginCreatorIdQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sitePa

geConnectionComponentPathQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sit

ePageConnectionIdQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface sit

ePageConnectionInternalInputObject_2
{


  type: sitePageConnect
  ionInternalTypeQueryString_2 | null;


  contentDigest: sitePageConnectionInternalContentDigestQueryString_2 | null;


  description: sitePage
  ConnectionInternalDescriptionQueryString | null;


  owner: sitePageConnectionInternalOwnerQueryString_2 | null;


}


export interface sitePageCo

nnectionInternalTypeQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageCo

nnectionInternalContentDigestQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePageCo

nnectionInternalDescriptionQueryString
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string>
  | null;


}


export interface sit

ePageConnectionInternalOwnerQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface Sit

ePageConnection
{


  pageInfo: PageInfo;


  edges: Array < SiteP
  ageEdge > | null;


  totalCount: number
  | null;


  distinct: Array<string> | null;


  group: Array < siteP
  ageGroupConnectionConnection > | null;


}


export interface DistinctSitePageConnectionArgs {


  field: sitePageDis
  tinctEnum
  |
  null;


}


export interface GroupSiteP

ageConnectionArgs
{


  skip: number | null;


  limit: number | nu
  ll;


  field: sitePageGroupEnum
  | null;


}


export interface Pag

eInfo
{


  hasNextPage: boole
  an;


}


export interface Sit

ePageEdge
{


  node: SitePage | n
  ull;


  next: SitePage | null;


  previous: SitePage
  | null;


}


export interface SitePage

e
xtends
Node
{


  id: string;


  parent: Node | nul
  l;


  children: Array<Node> | n
  ull;


  jsonName: string |
  null;


  internalComponentName: st
  ring | null;


  path: string | nul
  l;


  component: string | null;


  componentChunkName
    : string | null;


  context: context | null;


  pluginCreator: Sit
  ePlugin | null;


  pluginCreatorId: string |
  null;


  componentPath: str
  ing | null;


  internal: internal_9 | nu
  ll;


}


export interface Node {


  id: string;


  parent: Node | null;


  children: Array<Node> | null;


}


export interface con

text
{


  slug: string | null;


  tag: string
  | null;


  skip: number | null;


}


export interface SitePlugin
  extends Node {


  id: string;


  parent: Node | null;


  children: Array<Nod
  e
  > |
  null;


  resolve: string | nu
  ll;


  name: string | null;


  version: string | null;


  pluginOptions: plug
  inOptions_3
  |
  null;


  nodeAPIs: Array<string> |
    null;


  browserAPIs: Array<string> |
    null;


  ssrAPIs: Array<string> | null;


  pluginFilepath: string |
    null;


  packageJson: packageJson_2 | null;


  internal: internal_10 | nu
  ll;


}


export interface pluginOpt

ions_3
{


  plugins: Array < plugins
  _2 > | null;


  name: string | null;


  path: string | null;


  trackingId: string | nul
  l;


  head: boolean | null;


  anonymize: boolean | null;


  respectDNT: boolean | null;


  maxWidth: number | nul
  l;


  backgroundC
  olor: string | null;


  short_name: string |
  null;


  start_url: string | null;


  background_color: st
  ring | null;


  theme_color: string | null;


  display: string | null;


  pathCheck: boolean | null;


}


export interface plugin

s_2
{


  resolve: string | null;


  id: string | null;


  name: string | null;


  version: string | null
  ;


  pluginOptions: pluginOpti
  ons_4 | null;


  browserAPIs: Array < str
  ing > | null;


  ssrAPIs: Array<string> |
  null;


  pluginFilepath: string | null;


}


e
xport

interface pluginOptions_4 {


  maxWidth: number | null;


  backgroundColor: string | null;


}


export interface package

Json_2
{


  name: string | null;


  description: string | n
  ull;


  version: string | null;


  main: string | null;


  license: string | null;


  dependencies: Array<dependencies_2> | null;


  devDependencies: Array
  < devDependencies_2 > | null;


  peerDependencies: Array<peerDependencies_2> | null;


  keywords: Array<string> |
  null;


}


e
xport

interface dependencies_2 {


  name: string | null;


  version: string | nu
  ll;


}


export interface devDependen

cies_2
{


  name: str
  ing | null;


  version:
    string | null;


}


export interface peerDependencies_2 {


  name: string | null;


  version: string | null;


}


e
xport

interface internal_10 {


  contentDigest: string | null;


  type: string | null;


  owner: string | null;


}


export interface interna

l_9
{


  type: string | null;


  contentDigest: string | nu
  ll;


  description: string | null;


  owner: string | null;


}


export type sitePageDis
tinctEnum =


|
'jsonName'


| 'internalComponentName'


| 'path'


| 'component'


| 'componentChunkName'


| 'context___slug'


| 'context___tag'


| 'context___skip'


| 'pluginCreator___NODE'


| 'pluginCreatorId'


| 'componentPath'


| 'id'


| 'parent'


| 'internal___type'


| 'internal___content
Digest
'


| 'internal___description'


| 'internal___owner';


export type sitePageGroupEnum =


  | 'jsonName'


  | 'internalComponentName'


  | 'path'


  | 'component'


  | 'componentChunkName'


  | 'context___slug'


  | 'context___tag'


  | 'context___skip'


  | 'pluginCreator___N
ODE
'


| 'pluginCreatorId'


| 'componentPath'


| 'id'


| 'parent'


| 'internal___type'


| 'internal___contentDigest'


| 'internal___description'


| 'internal___owner';


export interface sitePageGroupConnectionConnection {


  pageInfo: PageInfo;


  edges: Array<sitePageGroupConnectionEdge> | null;


  field: string | null;


  fieldValue: string | null;


  totalCount: number |
    null;


}


export interface sitePa

geGroupConnectionEdge
{


  node: SitePage | null;


  next: SitePage | null;


  previous: SitePage | null;


}


export interface site

PluginConnectionSort
{


  fields: Array < SitePluginCo
  nnectionSortByFieldsEnum >;


  order: sitePlugi
  nConnectionSortOrderValues | null;


}


export type Site
PluginConnectionSortByFieldsEnum =


|
'resol
ve
'


| 'id'


| 'name'


| 'vers
ion
'


| 'plugin
Options___plugins
'


| 'plug
inOptions___name
'


| 'pluginOp
tions___path
'


| 'pluginO
ptions___trackingId
'


| 'pluginOp
tions___head
'


| 'pluginOption
s___anonymize
'


| 'plugin
Options___respectDNT
'


| 'pluginOptio
ns___maxWidth
'


| 'pluginOptions___backgr
oundColor
'


| 'pluginOpt
ions___short_name
'


| 'pluginOptions___start_url
'


| 'pluginOptions___backg
round_color
'


| 'pluginOptions___t
heme_color
'


| 'pluginOptions
___display
'


| 'pluginOpti
ons___pathCheck
'


| 'nodeAPIs'


| 'browserAPIs
'


| 'ssrAPIs'


| 'plug
inFilepath
'


| 'pack
ageJson___name
'


| 'packageJson___desc
ription
'


| 'packa
geJson___version
'


| 'pack
ageJson___main
'


| 'packa
geJson___author
'


| 'pack
ageJson___license
'


| 'packageJ
son___dependencies
'


| 'packageJ
son___devDependencies
'


| 'packag
eJson___peerDependencies
'


| 'packag
eJson___keywords
'


| 'parent'


| 'internal___conte
ntDigest
'


| 'internal___type'


| 'internal___owner';


export type sitePlug
inConnectionSortOrderValues = 'ASC' | 'DESC';


export interface filterSitePlugin {


  resolve: sitePluginConnectionResolveQueryString_2 |
    null;


  id: sitePluginConnectionIdQueryString_2 | null;


  name: sitePluginCon
  nectionNameQueryString_2
  |
  null;


  version: sitePluginConn
  ectionVersionQueryString_2
  |
  null;


  pluginOptions: sit
  ePluginConnectionPluginOptionsInputObject_2
  |
  null;


  nodeAPIs: sitePluginConn
  ectionNodeApIsQueryList_2
  |
  null;


  browserAPIs: sitePluginC
  onnectionBrowserApIsQueryList_2
  |
  null;


  ssrAPIs: sitePluginConnectio
  nSsrApIsQueryList_2
  |
  null;


  pluginFilepath: sitePlu
  ginConnectionPluginFilepathQueryString_2
  |
  null;


  packageJson: sitePlugi
  nConnectionPackageJsonInputObject_2
  |
  null;


  internal: sitePlug
  inConnectionInternalInputObject_2
  |
  null;


}


export interface sitePlu

ginConnectionResolveQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nul
  l;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePluginConnect

ionIdQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface sitePluginConnectionNameQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


  in: Array<string> | null;


}


export interface sitePluginConnectionVersi

onQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface sit

ePluginConnectionPluginOptionsInputObject_2
{


  plugins: sitePlugin
  ConnectionPluginOptionsPluginsQueryList_2 | null;


  name: sitePluginConnectionPluginOptionsNameQueryString_2 | null;


  path: sitePluginCo
  nnectionPluginOptionsPathQueryString_2 | null;


  trackingId: sitePlu
  ginConnectionPluginOptionsTrackingIdQueryString_2 | null;


  head: sitePluginConnectionPluginOptionsH
  eadQueryBoolean_2 | null;


  anonymize: sitePlug
  inConnectionPluginOptionsAnonymizeQueryBoolean_2 | null;


  respectDNT: sitePluginConnectionPluginOptionsRespectDntQueryBoolean_2 | null;


  maxWidth: sitePlug
  inConnectionPluginOptionsMaxWidthQueryInteger_2 | null;


  backgroundColor: sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 | null;


  short_name: sitePl
  uginConnectionPluginOptionsShortNameQueryString_2 | null;


  start_url: sitePluginConnectionPluginOptionsStartUrlQueryString_2 | null;


  background_color:
    sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 | null;


  theme_color: sitePluginConnectionPluginOptionsThemeColorQueryString_2 | null;


  display: sitePlugi
  nConnectionPluginOptionsDisplayQueryString_2 | null;


  pathCheck: sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;


}


export interface siteP

luginConnectionPluginOptionsPluginsQueryList_2
{


  elemMatch: sitePluginConnectionPluginOptionsPluginsInputObject_2 | null;


}


export interface sitePluginConnectionPluginOp

tionsPluginsInputObject_2
{


  resolve: sitePluginConnectionPluginOptio
  nsPluginsResolveQueryString_2 | null;


  id: sitePluginConnectionPluginOptionsPluginsIdQueryString_
  2 | null;


  name: sitePluginCo
  nnectionPluginOptionsPluginsNameQueryString_2 | null;


  version: sitePluginConnec
  tionPluginOptionsPluginsVersionQueryString_2 | null;


  pluginOptions: sit
  ePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;


  browserAPIs: sitePluginCo
  nnectionPluginOptionsPluginsBrowserApIsQueryList_2 | null;


  ssrAPIs: sitePlugi
  nConnectionPluginOptionsPluginsSsrApIsQueryList_2 | null;


  pluginFilepath: si
  tePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;


}


export interface sit

ePluginConnectionPluginOptionsPluginsResolveQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sitePlugin

ConnectionPluginOptionsPluginsIdQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePlugin

ConnectionPluginOptionsPluginsNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePluginConnectionPlugin

OptionsPluginsVersionQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


e
xport

interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {


  maxWidth: sitePluginConnectionPluginOp
  tionsPluginsPluginOptionsMaxWidthQueryInteger_2
  |
  null;


  backgroundColor: sit
  ePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
  |
  null;


}


export interface sit

ePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> |
  null;


}


export interface sit

ePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePluginConnectionPluginOptionsPlug

insBrowserApIsQueryList_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sit

ePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sitePl

uginConnectionPluginOptionsPluginsPluginFilepathQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sitePl

uginConnectionPluginOptionsNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sit

ePluginConnectionPluginOptionsPathQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface sitePluginConnection

PluginOptionsTrackingIdQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface sitePluginConnectionPlu

ginOptionsHeadQueryBoolean_2
{


  eq: boolean | null
  ;


  ne: boolean | null;


in:
  Array<boolean> | null;


}


export interface site

PluginConnectionPluginOptionsAnonymizeQueryBoolean_2
{


  eq: boolean | null;


  ne: boolean | null
  ;


in:
  Array<boolean>
  | null;


}


export interface sit

ePluginConnectionPluginOptionsRespectDntQueryBoolean_2
{


  eq: boolean | null;


  ne: boolean | null;


in:
  Array<boolean> | null;


}


e
xport

interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  'id'
  |
  'parent'
  |
  'internal___contentDigest'
  |
  'internal___type'
  |
  'internal___owner';
  ull;


}


export interface sitePluginC

onnectionPluginOptionsBackgroundColorQueryString_3
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | nu
  ll;


}


export interface sitePluginConn

ectionPluginOptionsShortNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | n
  ull;


  glob: string | null
  ;


in:
  Array<string> | null;


}


export interface sitePluginConnectionPluginOptionsStartUrlQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


  in: Array<string> | null;


}


export interface sitePluginConnectionPluginOptionsBackgroundColorQu

eryString_4
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface siteP

luginConnectionPluginOptionsThemeColorQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface sitePluginConnectionPluginOptionsDisplayQueryStrin

g_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePlugin

ConnectionPluginOptionsPathCheckQueryBoolean_2
{


  eq: boolean | null;


  ne: boolean | null;


in:
  Array<boolean> | null;


}


export interface sitePlugin

ConnectionNodeApIsQueryList_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePluginConnectionBrowserApIsQueryList_2 {


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


  in: Array<string>
    | null;


}


export interface sitePluginConnectionSsrApIsQueryList_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


  in: Array<string> | null;


}


export interface sitePl

uginConnectionPluginFilepathQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface sit

ePluginConnectionPackageJsonInputObject_2
{


  name: sitePluginCon
  nectionPackageJsonNameQueryString_2 | null;


  description: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;


  version: sitePlugi
  nConnectionPackageJsonVersionQueryString_2 | null;


  main: sitePluginCon
  nectionPackageJsonMainQueryString_2 | null;


  license: sitePluginConnectionPackageJsonLicen
  seQueryString_2 | null;


  dependencies: sitePl
  uginConnectionPackageJsonDependenciesQueryList_2 | null;


  devDependencies: sitePluginConnectio
  nPackageJsonDevDependenciesQueryList_2 | null;


  peerDependencies: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;


  keywords: sitePlug
  inConnectionPackageJsonKeywordsQueryList_2 | null;


}


e
xport

interface sitePluginConnectionPackageJsonNameQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


  in: Array<string> |
    null;


}


export interface sitePluginConnectionPacka

geJsonDescriptionQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export
inter
face
sitePluginConnectionPackageJsonVersionQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: strin
  g | null;


in:
  Array<string> | null;


}


export interface sitePluginCon

nectionPackageJsonMainQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sitePluginConnectionPackageJsonLice

nseQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: stri
  ng | null;


in:
  Array<string> | null;


}


export interface sitePluginConnecti

onPackageJsonDependenciesQueryList_2
{


  elemMatch: sitePluginConnectionPackageJsonDepende
  nciesInputObject_2 | null;


}


export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {


  name: sitePluginCo
  nnectionPackageJsonDependenciesNameQueryString_2
  |
  null;


  version: sitePluginConnec
  tionPackageJsonDependenciesVersionQueryString_2
  |
  null;


}


export interface sitePl

uginConnectionPackageJsonDependenciesNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sitePl

uginConnectionPackageJsonDependenciesVersionQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePlugin

ConnectionPackageJsonDevDependenciesQueryList_2
{


  elemMatch: sitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;


}


export interface sitePlugin

ConnectionPackageJsonDevDependenciesInputObject_2
{


  name: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;


  version: sitePluginConnect
  ionPackageJsonDevDependenciesVersionQueryString_2 | null;


}


export interface sitePluginConnectionPa

ckageJsonDevDependenciesNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePl

uginConnectionPackageJsonDevDependenciesVersionQueryString_2
{


  eq: string | null;


  ne: string
  | null;


  regex: string | nul
  l;


  glob: string | null
  ;


in:
  Array<string> | null;


}


export interface sitePluginCon

nectionPackageJsonPeerDependenciesQueryList_2
{


  elemMatch: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;


}


export interface sitePlugin

ConnectionPackageJsonPeerDependenciesInputObject_2
{


  name: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;


  version: sitePluginCo
  nnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;


}


export interface sit

ePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface sitePluginConnectionPackageJs

onPeerDependenciesVersionQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface sit

ePluginConnectionPackageJsonKeywordsQueryList_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sit

ePluginConnectionInternalInputObject_2
{


  contentDigest: siteP
  luginConnectionInternalContentDigestQueryString_2 | null;


  type: sitePluginConnectionInternalTypeQueryString_2
  | null;


  owner: sitePluginCon
  nectionInternalOwnerQueryString_2 | null;


}


export interface sit

ePluginConnectionInternalContentDigestQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> | null;


}


export interface sitePluginConnectionInternalTypeQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface sit

ePluginConnectionInternalOwnerQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface Sit

ePluginConnection
{


  pageInfo: PageInfo;


  edges: Array<SitePluginEdge> | null;


  totalCount: number | null;


  distinct: Array < st
  ring > | null;


  group: Array < sitePl
  uginGroupConnectionConnection > | null;


}


export interface Dis

tinctSitePluginConnectionArgs
{


  field: sitePluginDis
  tinctEnum | null;


}


export interface Gro

upSitePluginConnectionArgs
{


  skip: number | null;


  limit: number | null;


  field: sitePluginGro
  upEnum | null;


}


export interface Sit

ePluginEdge
{


  node: SitePlugin | n
  ull;


  next: SitePlugin | null;


  previous: SitePlugin
  | null;


}


export type sitePlug
inDistinctEnum =


|
'resolve'


| 'id'


| 'name'


| 'version'


| 'pluginOptions___p
lugins
'


| 'pluginOptions___name'


| 'pluginOptions___path'


| 'pluginOptions___
trackingId
'


| 'pluginOptions___head'


| 'pluginOptions___anonymize'


| 'pluginOptions___
respectDNT
'


| 'pluginOptions___maxWidth'


| 'pluginOptions___backgroundColor'


| 'pluginOptions___
short_name
'


| 'pluginOptions___start_url'


| 'pluginOptions___background_color'


| 'pluginOptions__
_theme_color
'


| 'pluginOptions___
display
'


| 'pluginOptions___
pathCheck
'


| 'nodeAPIs'


| 'browserAPIs'


| 'ssrAPIs'


| 'pluginFilepath'


| 'packageJson___name'


| 'packageJson___description'


| 'packageJson___v
ersion
'


| 'packageJson___mai
n
'


| 'packageJson___author'


| 'packageJson___license'


| 'packageJson___d
ependencies
'


| 'packageJson___dev
Dependencies
'


| 'packageJson___peerDependencies'


| 'packageJson___keywords'


| 'parent'


| 'internal___conten
tDigest
'


| 'internal___type'


| 'internal___owner';


export type sitePlugin
GroupEnum =


|
'resolve'


| 'id'


| 'name'


| 'version'


| 'pluginOptions___plugins'


| 'pluginOptions___name'


| 'pluginOptions___
path
'


| 'pluginOptions___trackingId'


| 'pluginOptions___head'


| 'pluginOptions__
_anonymize
'


| 'pluginOptions___r
espectDNT
'


| 'pluginOptions___maxWidth'


| 'pluginOptions___backgroundColor'


| 'pluginOptions__
_short_name
'


| 'pluginOptions___s
tart_url
'


| 'pluginOptions___background_color'


| 'pluginOptions___theme_color'


| 'pluginOptions__
_display
'


| 'pluginOptions___p
athCheck
'


| 'nodeAPIs'


| 'browserAPIs'


| 'ssrAPIs'


| 'pluginFilepath'


| 'packageJson___name'


| 'packageJson___description'


| 'packageJson___version'


| 'packageJson___main'


| 'packageJson___author'


| 'packageJson___license'


| 'packageJson___dependencies'


| 'packageJson___devDependencies'


| 'packageJson___p
eerDependencies
'


| 'packageJson___key
words
'


| 'parent'


| 'internal___contentDigest'


| 'internal___type
'


| 'internal___owner'
;


export interface sitePluginGroupConnectionConnection {


  pageInfo: PageInfo;


  edges: Array<sitePluginGroupConnectionEdge> | null;


  field: string | nu
  ll;


  fieldValue: string | null;


  totalCount: number
    | null;


}


export interface sitePluginGroupConnectionEdge {


  node: SitePlugin | null;


  next: SitePlugin | null;


  previous: SitePlug
  in
  |
  null;


}


export interface directoryConnectionSort {


  fields: Array<Dire
  ctoryConnectionSortByFieldsEnum
  >;


  order: directoryConnectio
  nSortOrderValues
  |
  null;


}


export type DirectoryConnectionSortByFieldsEnum =


  | 'id'


  | 'parent'


  | 'internal___contentDigest'


  | 'internal___type
'


| 'internal___descri
ption
'


| 'internal___owner'


| 'sourceInstanceName'


| 'absolutePath'


| 'relativePath'


| 'extension'


| 'size'


| 'prettySize'


| 'modifiedTime'


| 'accessTime'


| 'changeTime'


| 'birthTime'


| 'root'


| 'dir'


| 'base'


| 'ext'


| 'name'


| 'relativeDirectory'


| 'dev'


| 'mode'


| 'nlink'


| 'uid'


| 'gid'


| 'rdev'


| 'blksize'


| 'ino'


| 'blocks'


| 'atimeMs'


| 'mtimeMs'


| 'ctimeMs'


| 'birthtimeMs'


| 'atime'


| 'mtime'


| 'ctime'


| 'birthtime';


export type directoryConnec
tionSortOrderValues = 'ASC' | 'DESC';


export interface fil

terDirectory
{


  id: directoryConnecti
  onIdQueryString_2 | null;


  internal: directoryConnectionInternalInputObject_2 | null;


  sourceInstanceName: d
  irectoryConnectionSourceInstanceNameQueryString_2 | null;


  absolutePath: directoryConnectionAbsolutePathQueryString_2 | null;


  relativePath: directo
  ryConnectionRelativePathQueryString_2 | null;


  extension: directoryConnectionExtensionQueryString_2 | null;


  size: directoryConnec
  tionSizeQueryInteger_2 | null;


  prettySize: directoryConnectionPrettySizeQueryString_2 | null;


  modifiedTime: directoryConnectionModifiedTimeQueryString_2
  | null;


  accessTime: directoryConnectionAccessTimeQueryStri
  ng_2 | null;


  changeTime: director
  yConnectionChangeTimeQueryString_2 | null;


  birthTime: directoryConnectionBirthTimeQueryString_2 | null
  ;


  root: directoryConne
  ctionRootQueryString_2 | null;


  dir: directoryConnectionDirQueryString_2 | null;


  base: directoryConne
  ctionBaseQueryString_2 | null;


  ext: directoryConnectionExtQueryString_2 | null;


  name: directoryConne
  ctionNameQueryString_2 | null;


  relativeDirectory: directoryConnectionRelativeD
  irectoryQueryString_2 | null;


  dev: directoryConnec
  tionDevQueryInteger_2 | null;


  mode: directoryConnectionModeQueryInteger_
  2 | null;


  nlink: directoryConn
  ectionNlinkQueryInteger_2 | null;


  uid: directoryConnectionUidQueryInteger_2 |
  null;


  gid: directoryConnec
  tionGidQueryInteger_2 | null;


  rdev: directoryConnectionRdevQueryInteger_2 | n
  ull;


  blksize: directoryCo
  nnectionBlksizeQueryInteger_2 | null;


  ino: directoryConnectionInoQueryInteger_2 | null;


  blocks: directoryConnectionBlocksQueryInteger_2 | null;


  atimeMs: directoryConnectionAtimeMsQueryFloat_2 | null;


  mtimeMs: directoryConnectionMtimeMsQueryFloat_2 | null;


  ctimeMs: directoryConnectionCtimeMsQueryFloat_2 | null;


  birthtimeMs: directoryConnectionBirthtimeMsQueryFloat_2 | null;


  atime: directoryConnectionAtimeQueryString_2 | null;


  mtime: directoryConnectionMtimeQueryString_2 | null;


  ctime: directoryConnectionCtimeQueryString_2 | null;


  birthtime: directoryC
  onnectionBirthtimeQueryString_2 | null;


}


export interface dir

ectoryConnectionIdQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface directoryConnectionInternalInputObject_2 {


  contentDigest: directoryConnectionInternalContentDigestQueryString_2 | null;


  type: directoryCon
  nectionInternalTypeQueryString_2
  |
  null;


  description: direct
  oryConnectionInternalDescriptionQueryString_2
  |
  null;


  owner: directoryConnectionInternalOwnerQueryString_2 | null;


}


e
xport

interface directoryConnectionInternalContentDigestQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface directoryConnectionInternalTypeQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface directoryConnectionInternalDescriptionQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | nul
  l;


  glob: string | null;


  in: Array<string> | null;


}


export interface dire

ctoryConnectionInternalOwnerQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface dir

ectoryConnectionSourceInstanceNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface dir

ectoryConnectionAbsolutePathQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface direc

toryConnectionRelativePathQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface directoryConnectionExtensionQueryStri

ng_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface directoryConnectionSizeQueryInteger_2 {


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;


}


export interface directoryConnectionPrettySizeQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


  in: Array<string> | null;


}


e
xport

interface directoryConnectionModifiedTimeQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface directoryConnectionAccessTimeQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;


}


export interface directoryC

onnectionChangeTimeQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface directoryConnectionBirthTimeQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | n
  ull;


}


export interface dir

ectoryConnectionRootQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface dir

ectoryConnectionDirQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface directoryC

onnectionBaseQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface directoryConnectionExtQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | n
  ull;


}


export interface dir

ectoryConnectionNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface directoryCo

nnectionRelativeDirectoryQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;


}


export interface direct

oryConnectionDevQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> | null;


}


e
xport

interface directoryConnectionModeQueryInteger_2 {


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;


}


e
xport

interface directoryConnectionNlinkQueryInteger_2 {


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;


}


export interface direc

toryConnectionUidQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null
  ;


  lt: number | null;


  lte: number | null
  ;


in:
  Array<number> | null;


}


export interface direc

toryConnectionGidQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null
  ;


  lt: number | null;


  lte: number | null
  ;


in:
  Array<number> | null;


}


export interface direc

toryConnectionRdevQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null
  ;


  lt: number | null;


  lte: number | null
  ;


in:
  Array<number> |
  null;


}


export interface dir

ectoryConnectionBlksizeQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> | null;


}


export interface dire

ctoryConnectionInoQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> | null;


}


export interface dire

ctoryConnectionBlocksQueryInteger_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number>
  | null;


}


e
xport

interface directoryConnectionAtimeMsQueryFloat_2 {


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> |
    null;


}


export interface dir

ectoryConnectionMtimeMsQueryFloat_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> |
  null;


}


export interface directoryConnectionCtimeMsQu

eryFloat_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> |
  null;


}


export interface dir

ectoryConnectionBirthtimeMsQueryFloat_2
{


  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


in:
  Array<number> |
  null;


}


export interface dir

ectoryConnectionAtimeQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null
  ;


  glob: string | null;


in:
  Array<string> |
  null;


}


export interface directoryConnectionMtimeQuery

String_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface directoryConnectionCtimeQuery

String_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface directoryConnectionBir

thtimeQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string>
  | null;


}


export interface DirectoryConnection {


  pageInfo: PageInfo;


  edges: Array<DirectoryEdge> | null;


  totalCount: number
    | null;


  distinct: Array<string> | null;


  group: Array<direc
  toryGroupConnectionConnection
  > |
  null;


}


e
xport

interface DistinctDirectoryConnectionArgs {


  field: directoryDistinctEnum | null;


}


export interface Grou

pDirectoryConnectionArgs
{


  skip: number | null;


  limit: number | nu
  ll;


  field: directoryGro
  upEnum | null;


}


export interface Dir

ectoryEdge
{


  node: Directory | n
  ull;


  next: Directory | null;


  previous: Director
  y | null;


}


e
xport

interface Directory extends Node {


  id: string;


  parent: Node | null;


  children: Array<Node> | null;


  internal: internal
  _11
  |
  null;


  sourceInstanceName:
    string | null;


  absolutePath: string | null;


  relativePath: strin
  g
  |
  null;


  extension: string | null;


  size: number | nul
  l;


  prettySize: string
    | null;


  modifiedTime: Date | null;


  accessTime: Date |
    null;


  changeTime: Date | null;


  birthTime: Date |
    null;


  root: string | null;


  dir: string | null;


  base: string | null;


  ext: string | null;


  name: string | nul
  l;


  relativeDirectory:
    string | null;


  dev: number | null;


  mode: number | null;


  nlink: number | null;


  uid: number | null;


  gid: number | null;


  rdev: number | null;


  blksize: number | null;


  ino: number | null;


  blocks: number | null;


  atimeMs: number | nu
  ll;


  mtimeMs: number | null;


  ctimeMs: number | nu
  ll;


  birthtimeMs: number | null;


  atime: Date | null;


  mtime: Date | null;


  ctime: Date | null;


  birthtime: Date |
    null;


}


export interface ModifiedTimeDirectoryArgs {


  formatString: stri
  ng
  |
  null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;


}


export interface AccessTimeDirectoryArgs {


  formatString: stri
  ng
  |
  null;


  fromNow: boolean | null;


  difference: string
    | null;


  locale: string | null;


}


export interface Cha

ngeTimeDirectoryArgs
{


  formatString: stri
  ng | null;


  fromNow: boolean | null;


  difference: string
  | null;


  locale: string | null;


}


export interface Bir

thTimeDirectoryArgs
{


  formatString: stri
  ng | null;


  fromNow: boolean | null;


  difference: string |
  null;


  locale: string | null;


}


export interface AtimeDirec

toryArgs
{


  formatString: string | null;


  fromNow: boolean | nu
  ll;


  difference: string | null;


  locale: string | null
  ;


}


export interface Mti

meDirectoryArgs
{


  formatString: string
  | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;


}


export interface CtimeDirectoryArgs {


  formatString: stri
  ng
  |
  null;


  fromNow: boolean | null;


  difference: string
    | null;


  locale: string | null;


}


export interface Birt

htimeDirectoryArgs
{


  formatString: strin
  g | null;


  fromNow: boolean | null;


  difference: string
  | null;


  locale: string | null;


}


export interface inte

rnal_11
{


  contentDigest: stri
  ng | null;


  type: string | null;


  description: string
  | null;


  owner: string | null;


}


e
xport
type Date = any;


export type director
yDistinctEnum =


|
'id'


| 'parent'


| 'internal___contentDigest'


| 'internal___type
'


| 'internal___descri
ption
'


| 'internal___owner'


| 'sourceInstanceName'


| 'absolutePath'


| 'relativePath'


| 'extension'


| 'size'


| 'prettySize'


| 'modifiedTime'


| 'accessTime'


| 'changeTime'


| 'birthTime'


| 'root'


| 'dir'


| 'base'


| 'ext'


| 'name'


| 'relativeDirecto
ry
'


| 'dev'


| 'mode'


| 'nlink'


| 'uid'


| 'gid'


| 'rdev'


| 'blksize'


| 'ino'


| 'blocks'


| 'atimeMs'


| 'mtimeMs'


| 'ctimeMs'


| 'birthtimeMs'


| 'atime'


| 'mtime'


| 'ctime'


| 'birthtime';


export type directoryGroupE
num =


|
'id'


| 'parent'


| 'internal___content
Digest
'


| 'internal___type'


| 'internal___description'


| 'internal___owne
r
'


| 'sourceInstanceName
'


| 'absolutePath'


| 'relativePath'


| 'extension'


| 'size'


| 'prettySize'


| 'modifiedTime'


| 'accessTime'


| 'changeTime'


| 'birthTime'


| 'root'


| 'dir'


| 'base'


| 'ext'


| 'name'


| 'relativeDirectory'


| 'dev'


| 'mode'


| 'nlink'


| 'uid'


| 'gid'


| 'rdev'


| 'blksize'


| 'ino'


| 'blocks'


| 'atimeMs'


| 'mtimeMs'


| 'ctimeMs'


| 'birthtimeMs'


| 'atime'


| 'mtime'


| 'ctime'


| 'birthtime';


export interface directoryGroupConnectionCo

nnection
{


  pageInfo: PageInfo
  ;


  edges: Array<directoryGroupConnectionEdge> | null;


  field: string | nu
  ll;


  fieldValue: string | null;


  totalCount: number
  | null;


}


export interface directoryGroupConnectionE

dge
{


  node: Directory |
  null;


  next: Directory | null;


  previous: Director
  y | null;


}


export interface fileConnectionSort {


  fields: Array<File
  ConnectionSortByFieldsEnum
  >;


  order: fileConnectionSortOrderValues | null;


}


e
xport
type FileConnectionSortByFieldsEnum =


  | 'id'


  | 'children'


  | 'parent'


  | 'internal___conte
ntDigest
'


| 'internal___type'


| 'internal___mediaType'


| 'internal___desc
ription
'


| 'internal___owner
'


| 'sourceInstanceNa
me
'


| 'absolutePath'


| 'relativePath'


| 'extension'


| 'size'


| 'prettySize'


| 'modifiedTime'


| 'accessTime'


| 'changeTime'


| 'birthTime'


| 'root'


| 'dir'


| 'base'


| 'ext'


| 'name'


| 'relativeDirecto
ry
'


| 'dev'


| 'mode'


| 'nlink'


| 'uid'


| 'gid'


| 'rdev'


| 'blksize'


| 'ino'


| 'blocks'


| 'atimeMs'


| 'mtimeMs'


| 'ctimeMs'


| 'birthtimeMs'


| 'atime'


| 'mtime'


| 'ctime'


| 'birthtime'


| 'publicURL';


export type fileConnect
ionSortOrderValues = 'ASC' | 'DESC';


export interface filterFile {


  id: fileConnection
  IdQueryString_2
  |
  null;


  internal: fileConnectionI
  nternalInputObject_2
  |
  null;


  sourceInstanceName: fileConnectionSourceInstanceNameQuerySt
  ring_2
  |
  null;


  absolutePath: fileConnectionAbsolutePathQueryString_2 | null;


  relativePath: file
  ConnectionRelativePathQueryString_2
  |
  null;


  extension: fileConnection
  ExtensionQueryString_2
  |
  null;


  size: fileConnecti
  onSizeQueryInteger_2
  |
  null;


  prettySize: fileConnectio
  nPrettySizeQueryString_2
  |
  null;


  modifiedTime: file
  ConnectionModifiedTimeQueryString_2
  |
  null;


  accessTime: fileConnectio
  nAccessTimeQueryString_2
  |
  null;


  changeTime: fileCo
  nnectionChangeTimeQueryString_2
  |
  null;


  birthTime: fileConnection
  BirthTimeQueryString_2
  |
  null;


  root: fileConnectionRootQueryString_2 | null;


  dir: fileConnectio
  nDirQueryString_2
  |
  null;


  base: fileConnectionBaseQ
  ueryString_2
  |
  null;


  ext: fileConnectionExtQueryString_2 | null;


  name: fileConnectionNameQueryString_2 | null;


  relativeDirectory: fileConnectionRelativeDirectoryQueryString_2 | null;


  dev: fileConnectio
  nDevQueryInteger_2
  |
  null;


  mode: fileConnectionModeQueryInteger_2 | null;


  nlink: fileConnect
  ionNlinkQueryInteger_2
  |
  null;


  uid: fileConnectionUidQueryInteger_2 | null;


  gid: fileConnectio
  nGidQueryInteger_2
  |
  null;


  rdev: fileConnectionRdevQueryInteger_2 | null;


  blksize: fileConne
  ctionBlksizeQueryInteger_2
  |
  null;


  ino: fileConnectionInoQueryInteger_2 | null;


  blocks: fileConnec
  tionBlocksQueryInteger_2
  |
  null;


  atimeMs: fileConnectionAtimeMsQueryFloat_2 | null;


  mtimeMs: fileConne
  ctionMtimeMsQueryFloat_2
  |
  null;


  ctimeMs: fileConnectionCtimeMsQueryFloat_2 | null;


  birthtimeMs: fileCo
  nnectionBirthtimeMsQueryFloat_2
  |
  null;


  atime: fileConnectionAtimeQueryString_2 | null;


  mtime: fileConnectio
  nMtimeQueryString_2
  |
  null;


  ctime: fileConnectionCtimeQueryString
  _2
  |
  null;


  birthtime: fileConne
  ctionBirthtimeQueryString_2
  |
  null;


  publicURL: publicUrlQueryString_4 | null;


}


e
xport

interface fileConnectionIdQueryString_2 {


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> |
    null;


}


export interface fil

eConnectionInternalInputObject_2
{


  contentDigest: fileC
  onnectionInternalContentDigestQueryString_2 | null;


  type: fileConnectionInternalTypeQuer
  yString_2 | null;


  mediaType: fileConnectionInternalMediaTypeQ
  ueryString_2 | null;


  description: fileConnectionInternalDescriptionQueryString_2 | null;


  owner: fileConnection
  InternalOwnerQueryString_2 | null;


}


export interface fil

eConnectionInternalContentDigestQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface fileConnec

tionInternalTypeQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface fil

eConnectionInternalMediaTypeQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | nu
  ll;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface fil

eConnectionInternalDescriptionQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | n
  ull;


}


export interface fil

eConnectionInternalOwnerQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | nul
  l;


in:
  Array<string> | null;


}


export interface fileCo

nnectionSourceInstanceNameQueryString_2
{


  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


in:
  Array<string> | null;

}


export interface fileConnectionAbsolutePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionRelativePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionExtensionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionSizeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionPrettySizeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionModifiedTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionAccessTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionChangeTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionBirthTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionRootQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionDirQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionBaseQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionExtQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionRelativeDirectoryQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionDevQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionModeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionNlinkQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionUidQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionGidQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionRdevQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionBlksizeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionInoQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionBlocksQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionAtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionMtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionCtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionBirthtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileConnectionAtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionMtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionCtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileConnectionBirthtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface publicUrlQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface FileConnection {

  pageInfo: PageInfo;


  edges: Array<FileEdge> | null;


  totalCount: number | null;


  distinct: Array<string> | null;


  group: Array<fileGroupConnectionConnection> | null;

}


export interface DistinctFileConnectionArgs {

  field: fileDistinctEnum | null;

}


export interface GroupFileConnectionArgs {

  skip: number | null;


  limit: number | null;


  field: fileGroupEnum | null;

}


export interface FileEdge {

  node: File | null;


  next: File | null;


  previous: File | null;

}


export interface File extends Node {

  id: string;


  parent: Node | null;


  children: Array<Node> | null;


  childAuthorJson: AuthorJson | null;


  childImageSharp: ImageSharp | null;


  childMarkdownRemark: MarkdownRemark | null;


  internal: internal_12 | null;


  sourceInstanceName: string | null;


  absolutePath: string | null;


  relativePath: string | null;


  extension: string | null;


  size: number | null;


  prettySize: string | null;


  modifiedTime: Date | null;


  accessTime: Date | null;


  changeTime: Date | null;


  birthTime: Date | null;


  root: string | null;


  dir: string | null;


  base: string | null;


  ext: string | null;


  name: string | null;


  relativeDirectory: string | null;


  dev: number | null;


  mode: number | null;


  nlink: number | null;


  uid: number | null;


  gid: number | null;


  rdev: number | null;


  blksize: number | null;


  ino: number | null;


  blocks: number | null;


  atimeMs: number | null;


  mtimeMs: number | null;


  ctimeMs: number | null;


  birthtimeMs: number | null;


  atime: Date | null;


  mtime: Date | null;


  ctime: Date | null;


  birthtime: Date | null;


  publicURL: string | null;

}


export interface ModifiedTimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface AccessTimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface ChangeTimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface BirthTimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface AtimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface MtimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface CtimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface BirthtimeFileArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface AuthorJson extends Node {

  id: string;


  parent: Node | null;


  children: Array<Node> | null;


  bio: string | null;


  avatar: File | null;


  twitter: string | null;


  github: string | null;


  internal: internal_13 | null;

}


export interface internal_13 {

  contentDigest: string | null;


  type: string | null;


  owner: string | null;

}


export interface ImageSharp extends Node {

  id: string;


  parent: Node | null;


  children: Array<Node> | null;


  internal: internal_14 | null;


  fixed: ImageSharpFixed | null;


  resolutions: ImageSharpResolutions | null;


  fluid: ImageSharpFluid | null;


  sizes: ImageSharpSizes | null;


  original: ImageSharpOriginal | null;


  resize: ImageSharpResize | null;

}


export interface FixedImageSharpArgs {

  width: number | null;


  height: number | null;


  jpegProgressive: boolean | null;


  grayscale: boolean | null;


  duotone: DuotoneGradient | null;


  traceSVG: Potrace | null;


  quality: number | null;


  toFormat: ImageFormat | null;


  cropFocus: ImageCropFocus | null;


  rotate: number | null;

}


export interface ResolutionsImageSharpArgs {

  width: number | null;


  height: number | null;


  jpegProgressive: boolean | null;


  grayscale: boolean | null;


  duotone: DuotoneGradient | null;


  traceSVG: Potrace | null;


  quality: number | null;


  toFormat: ImageFormat | null;


  cropFocus: ImageCropFocus | null;


  rotate: number | null;

}


export interface FluidImageSharpArgs {

  maxWidth: number | null;


  maxHeight: number | null;


  grayscale: boolean | null;


  jpegProgressive: boolean | null;


  duotone: DuotoneGradient | null;


  traceSVG: Potrace | null;


  quality: number | null;


  toFormat: ImageFormat | null;


  cropFocus: ImageCropFocus | null;


  rotate: number | null;

}


export interface SizesImageSharpArgs {

  maxWidth: number | null;


  maxHeight: number | null;


  grayscale: boolean | null;


  jpegProgressive: boolean | null;


  duotone: DuotoneGradient | null;


  traceSVG: Potrace | null;


  quality: number | null;


  toFormat: ImageFormat | null;


  cropFocus: ImageCropFocus | null;


  rotate: number | null;

}


export interface ResizeImageSharpArgs {

  width: number | null;


  height: number | null;


  quality: number | null;


  jpegProgressive: boolean | null;


  pngCompressionLevel: number | null;


  grayscale: boolean | null;


  duotone: DuotoneGradient | null;


  base64: boolean | null;


  traceSVG: Potrace | null;


  toFormat: ImageFormat | null;


  cropFocus: ImageCropFocus | null;


  rotate: number | null;

}


export interface internal_14 {

  contentDigest: string | null;


  type: string | null;


  owner: string | null;

}


export interface DuotoneGradient {

  highlight: string | null;


  shadow: string | null;


  opacity: number | null;

}


export interface Potrace {

  turnPolicy: PotraceTurnPolicy | null;


  turdSize: number | null;


  alphaMax: number | null;


  optCurve: boolean | null;


  optTolerance: number | null;


  threshold: number | null;


  blackOnWhite: boolean | null;


  color: string | null;


  background: string | null;

}


export type PotraceTurnPolicy =

  | 'TURNPOLICY_BLACK'

  | 'TURNPOLICY_WHITE'

  | 'TURNPOLICY_LEFT'

  | 'TURNPOLICY_RIGHT'

  | 'TURNPOLICY_MINORITY'

  | 'TURNPOLICY_MAJORITY';


export type ImageFormat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP';


export type ImageCropFocus =

  | 'CENTER'

  | 'NORTH'

  | 'NORTHEAST'

  | 'EAST'

  | 'SOUTHEAST'

  | 'SOUTH'

  | 'SOUTHWEST'

  | 'WEST'

  | 'NORTHWEST'

  | 'ENTROPY'

  | 'ATTENTION';


export interface ImageSharpFixed {

  base64: string | null;


  tracedSVG: string | null;


  aspectRatio: number | null;


  width: number | null;


  height: number | null;


  src: string | null;


  srcSet: string | null;


  srcWebp: string | null;


  srcSetWebp: string | null;


  originalName: string | null;

}


export interface ImageSharpResolutions {

  base64: string | null;


  tracedSVG: string | null;


  aspectRatio: number | null;


  width: number | null;


  height: number | null;


  src: string | null;


  srcSet: string | null;


  srcWebp: string | null;


  srcSetWebp: string | null;


  originalName: string | null;

}


export interface ImageSharpFluid {

  base64: string | null;


  tracedSVG: string | null;


  aspectRatio: number | null;


  src: string | null;


  srcSet: string | null;


  srcWebp: string | null;


  srcSetWebp: string | null;


  sizes: string | null;


  originalImg: string | null;


  originalName: string | null;

}


export interface ImageSharpSizes {

  base64: string | null;


  tracedSVG: string | null;


  aspectRatio: number | null;


  src: string | null;


  srcSet: string | null;


  srcWebp: string | null;


  srcSetWebp: string | null;


  sizes: string | null;


  originalImg: string | null;


  originalName: string | null;

}


export interface ImageSharpOriginal {

  width: number | null;


  height: number | null;


  src: string | null;

}


export interface ImageSharpResize {

  src: string | null;


  tracedSVG: string | null;


  width: number | null;


  height: number | null;


  aspectRatio: number | null;


  originalName: string | null;

}


export interface MarkdownRemark extends Node {

  id: string;


  parent: Node | null;


  children: Array<Node> | null;


  internal: internal_15 | null;


  frontmatter: frontmatter_2 | null;


  rawMarkdownBody: string | null;


  fileAbsolutePath: string | null;


  fields: fields_2 | null;


  html: string | null;


  htmlAst: JSON | null;


  excerpt: string | null;


  headings: Array<MarkdownHeading> | null;


  timeToRead: number | null;


  tableOfContents: string | null;


  wordCount: wordCount | null;

}


export interface ExcerptMarkdownRemarkArgs {

  pruneLength: number | null;


  truncate: boolean | null;

}


export interface HeadingsMarkdownRemarkArgs {

  depth: HeadingLevels | null;

}


export interface internal_15 {

  content: string | null;


  type: string | null;


  contentDigest: string | null;


  owner: string | null;


  fieldOwners: fieldOwners_2 | null;

}


export interface fieldOwners_2 {

  slug: string | null;

}


export interface frontmatter_2 {

  title: string | null;


  createdDate: Date | null;


  updatedDate: Date | null;


  author: AuthorJson | null;


  tags: Array<string> | null;


  image: File | null;


  draft: boolean | null;


  _PARENT: string | null;

}


export interface CreatedDatefrontmatter_2Args {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface UpdatedDatefrontmatter_2Args {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface fields_2 {

  slug: string | null;

}


export type JSON = any;


export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';


export interface MarkdownHeading {

  value: string | null;


  depth: number | null;

}


export interface wordCount {

  paragraphs: number | null;


  sentences: number | null;


  words: number | null;

}


export interface internal_12 {

  contentDigest: string | null;


  type: string | null;


  mediaType: string | null;


  description: string | null;


  owner: string | null;

}


export type fileDistinctEnum =

  | 'id'

  | 'children'

  | 'parent'

  | 'internal___contentDigest'

  | 'internal___type'

  | 'internal___mediaType'

  | 'internal___description'

  | 'internal___owner'

  | 'sourceInstanceName'

  | 'absolutePath'

  | 'relativePath'

  | 'extension'

  | 'size'

  | 'prettySize'

  | 'modifiedTime'

  | 'accessTime'

  | 'changeTime'

  | 'birthTime'

  | 'root'

  | 'dir'

  | 'base'

  | 'ext'

  | 'name'

  | 'relativeDirectory'

  | 'dev'

  | 'mode'

  | 'nlink'

  | 'uid'

  | 'gid'

  | 'rdev'

  | 'blksize'

  | 'ino'

  | 'blocks'

  | 'atimeMs'

  | 'mtimeMs'

  | 'ctimeMs'

  | 'birthtimeMs'

  | 'atime'

  | 'mtime'

  | 'ctime'

  | 'birthtime';


export type fileGroupEnum =

  | 'id'

  | 'children'

  | 'parent'

  | 'internal___contentDigest'

  | 'internal___type'

  | 'internal___mediaType'

  | 'internal___description'

  | 'internal___owner'

  | 'sourceInstanceName'

  | 'absolutePath'

  | 'relativePath'

  | 'extension'

  | 'size'

  | 'prettySize'

  | 'modifiedTime'

  | 'accessTime'

  | 'changeTime'

  | 'birthTime'

  | 'root'

  | 'dir'

  | 'base'

  | 'ext'

  | 'name'

  | 'relativeDirectory'

  | 'dev'

  | 'mode'

  | 'nlink'

  | 'uid'

  | 'gid'

  | 'rdev'

  | 'blksize'

  | 'ino'

  | 'blocks'

  | 'atimeMs'

  | 'mtimeMs'

  | 'ctimeMs'

  | 'birthtimeMs'

  | 'atime'

  | 'mtime'

  | 'ctime'

  | 'birthtime';


export interface fileGroupConnectionConnection {

  pageInfo: PageInfo;


  edges: Array<fileGroupConnectionEdge> | null;


  field: string | null;


  fieldValue: string | null;


  totalCount: number | null;

}


export interface fileGroupConnectionEdge {

  node: File | null;


  next: File | null;


  previous: File | null;

}


export interface imageSharpConnectionSort {

  fields: Array<ImageSharpConnectionSortByFieldsEnum>;


  order: imageSharpConnectionSortOrderValues | null;

}


export type ImageSharpConnectionSortByFieldsEnum =

  | 'id'

  | 'parent'

  | 'internal___contentDigest'

  | 'internal___type'

  | 'internal___owner'

  | 'fixed___base64'

  | 'fixed___tracedSVG'

  | 'fixed___aspectRatio'

  | 'fixed___width'

  | 'fixed___height'

  | 'fixed___src'

  | 'fixed___srcSet'

  | 'fixed___srcWebp'

  | 'fixed___srcSetWebp'

  | 'fixed___originalName'

  | 'resolutions___base64'

  | 'resolutions___tracedSVG'

  | 'resolutions___aspectRatio'

  | 'resolutions___width'

  | 'resolutions___height'

  | 'resolutions___src'

  | 'resolutions___srcSet'

  | 'resolutions___srcWebp'

  | 'resolutions___srcSetWebp'

  | 'resolutions___originalName'

  | 'fluid___base64'

  | 'fluid___tracedSVG'

  | 'fluid___aspectRatio'

  | 'fluid___src'

  | 'fluid___srcSet'

  | 'fluid___srcWebp'

  | 'fluid___srcSetWebp'

  | 'fluid___sizes'

  | 'fluid___originalImg'

  | 'fluid___originalName'

  | 'sizes___base64'

  | 'sizes___tracedSVG'

  | 'sizes___aspectRatio'

  | 'sizes___src'

  | 'sizes___srcSet'

  | 'sizes___srcWebp'

  | 'sizes___srcSetWebp'

  | 'sizes___sizes'

  | 'sizes___originalImg'

  | 'sizes___originalName'

  | 'original___width'

  | 'original___height'

  | 'original___src'

  | 'resize___src'

  | 'resize___tracedSVG'

  | 'resize___width'

  | 'resize___height'

  | 'resize___aspectRatio'

  | 'resize___originalName';


export type imageSharpConnectionSortOrderValues = 'ASC' | 'DESC';


export interface filterImageSharp {

  id: imageSharpConnectionIdQueryString_2 | null;


  internal: imageSharpConnectionInternalInputObject_2 | null;


  fixed: fixedTypeName_4 | null;


  resolutions: resolutionsTypeName_4 | null;


  fluid: fluidTypeName_4 | null;


  sizes: sizesTypeName_4 | null;


  original: originalTypeName_4 | null;


  resize: resizeTypeName_4 | null;

}


export interface imageSharpConnectionIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface imageSharpConnectionInternalInputObject_2 {

  contentDigest: imageSharpConnectionInternalContentDigestQueryString_2 | null;


  type: imageSharpConnectionInternalTypeQueryString_2 | null;


  owner: imageSharpConnectionInternalOwnerQueryString_2 | null;

}


export interface imageSharpConnectionInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface imageSharpConnectionInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface imageSharpConnectionInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedTypeName_4 {

  base64: fixedBase64QueryString_4 | null;


  tracedSVG: fixedTracedSvgQueryString_4 | null;


  aspectRatio: fixedAspectRatioQueryFloat_4 | null;


  width: fixedWidthQueryFloat_4 | null;


  height: fixedHeightQueryFloat_4 | null;


  src: fixedSrcQueryString_4 | null;


  srcSet: fixedSrcSetQueryString_4 | null;


  srcWebp: fixedSrcWebpQueryString_4 | null;


  srcSetWebp: fixedSrcSetWebpQueryString_4 | null;


  originalName: fixedOriginalNameQueryString_4 | null;

}


export interface fixedBase64QueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedTracedSvgQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedAspectRatioQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fixedWidthQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fixedHeightQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fixedSrcQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedSrcSetQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedSrcWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedSrcSetWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedOriginalNameQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsTypeName_4 {

  base64: resolutionsBase64QueryString_4 | null;


  tracedSVG: resolutionsTracedSvgQueryString_4 | null;


  aspectRatio: resolutionsAspectRatioQueryFloat_4 | null;


  width: resolutionsWidthQueryFloat_4 | null;


  height: resolutionsHeightQueryFloat_4 | null;


  src: resolutionsSrcQueryString_4 | null;


  srcSet: resolutionsSrcSetQueryString_4 | null;


  srcWebp: resolutionsSrcWebpQueryString_4 | null;


  srcSetWebp: resolutionsSrcSetWebpQueryString_4 | null;


  originalName: resolutionsOriginalNameQueryString_4 | null;

}


export interface resolutionsBase64QueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsTracedSvgQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsAspectRatioQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resolutionsWidthQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resolutionsHeightQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resolutionsSrcQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsSrcSetQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsSrcWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsSrcSetWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsOriginalNameQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidTypeName_4 {

  base64: fluidBase64QueryString_4 | null;


  tracedSVG: fluidTracedSvgQueryString_4 | null;


  aspectRatio: fluidAspectRatioQueryFloat_4 | null;


  src: fluidSrcQueryString_4 | null;


  srcSet: fluidSrcSetQueryString_4 | null;


  srcWebp: fluidSrcWebpQueryString_4 | null;


  srcSetWebp: fluidSrcSetWebpQueryString_4 | null;


  sizes: fluidSizesQueryString_4 | null;


  originalImg: fluidOriginalImgQueryString_4 | null;


  originalName: fluidOriginalNameQueryString_4 | null;

}


export interface fluidBase64QueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidTracedSvgQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidAspectRatioQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fluidSrcQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSrcSetQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSrcWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSrcSetWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSizesQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidOriginalImgQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidOriginalNameQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesTypeName_4 {

  base64: sizesBase64QueryString_4 | null;


  tracedSVG: sizesTracedSvgQueryString_4 | null;


  aspectRatio: sizesAspectRatioQueryFloat_4 | null;


  src: sizesSrcQueryString_4 | null;


  srcSet: sizesSrcSetQueryString_4 | null;


  srcWebp: sizesSrcWebpQueryString_4 | null;


  srcSetWebp: sizesSrcSetWebpQueryString_4 | null;


  sizes: sizesSizesQueryString_4 | null;


  originalImg: sizesOriginalImgQueryString_4 | null;


  originalName: sizesOriginalNameQueryString_4 | null;

}


export interface sizesBase64QueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesTracedSvgQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesAspectRatioQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface sizesSrcQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSrcSetQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSrcWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSrcSetWebpQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSizesQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesOriginalImgQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesOriginalNameQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface originalTypeName_4 {

  width: originalWidthQueryFloat_4 | null;


  height: originalHeightQueryFloat_4 | null;


  src: originalSrcQueryString_4 | null;

}


export interface originalWidthQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface originalHeightQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface originalSrcQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resizeTypeName_4 {

  src: resizeSrcQueryString_4 | null;


  tracedSVG: resizeTracedSvgQueryString_4 | null;


  width: resizeWidthQueryInt_4 | null;


  height: resizeHeightQueryInt_4 | null;


  aspectRatio: resizeAspectRatioQueryFloat_4 | null;


  originalName: resizeOriginalNameQueryString_4 | null;

}


export interface resizeSrcQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resizeTracedSvgQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resizeWidthQueryInt_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resizeHeightQueryInt_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resizeAspectRatioQueryFloat_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resizeOriginalNameQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface ImageSharpConnection {

  pageInfo: PageInfo;


  edges: Array<ImageSharpEdge> | null;


  totalCount: number | null;


  distinct: Array<string> | null;


  group: Array<imageSharpGroupConnectionConnection> | null;

}


export interface DistinctImageSharpConnectionArgs {

  field: imageSharpDistinctEnum | null;

}


export interface GroupImageSharpConnectionArgs {

  skip: number | null;


  limit: number | null;


  field: imageSharpGroupEnum | null;

}


export interface ImageSharpEdge {

  node: ImageSharp | null;


  next: ImageSharp | null;


  previous: ImageSharp | null;

}


export type imageSharpDistinctEnum =

  | 'id'

  | 'parent'

  | 'internal___contentDigest'

  | 'internal___type'

  | 'internal___owner';


export type imageSharpGroupEnum = 'id' | 'parent' | 'internal___contentDigest' | 'internal___type' | 'internal___owner';


export interface imageSharpGroupConnectionConnection {

  pageInfo: PageInfo;


  edges: Array<imageSharpGroupConnectionEdge> | null;


  field: string | null;


  fieldValue: string | null;


  totalCount: number | null;

}


export interface imageSharpGroupConnectionEdge {

  node: ImageSharp | null;


  next: ImageSharp | null;


  previous: ImageSharp | null;

}


export interface markdownRemarkConnectionSort {

  fields: Array<MarkdownRemarkConnectionSortByFieldsEnum>;


  order: markdownRemarkConnectionSortOrderValues | null;

}


export type MarkdownRemarkConnectionSortByFieldsEnum =

  | 'id'

  | 'parent'

  | 'internal___content'

  | 'internal___type'

  | 'internal___contentDigest'

  | 'internal___owner'

  | 'internal___fieldOwners___slug'

  | 'frontmatter___title'

  | 'frontmatter___createdDate'

  | 'frontmatter___updatedDate'

  | 'frontmatter___author'

  | 'frontmatter___tags'

  | 'frontmatter___image'

  | 'frontmatter___draft'

  | 'frontmatter____PARENT'

  | 'excerpt'

  | 'rawMarkdownBody'

  | 'fileAbsolutePath'

  | 'fields___slug'

  | 'html'

  | 'headings'

  | 'timeToRead'

  | 'tableOfContents'

  | 'wordCount___paragraphs'

  | 'wordCount___sentences'

  | 'wordCount___words';


export type markdownRemarkConnectionSortOrderValues = 'ASC' | 'DESC';


export interface filterMarkdownRemark {

  id: markdownRemarkConnectionIdQueryString_2 | null;


  internal: markdownRemarkConnectionInternalInputObject_2 | null;


  frontmatter: markdownRemarkConnectionFrontmatterInputObject_2 | null;


  excerpt: excerptQueryString_4 | null;


  rawMarkdownBody: markdownRemarkConnectionRawMarkdownBodyQueryString_2 | null;


  fileAbsolutePath: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null;


  fields: markdownRemarkConnectionFieldsInputObject_2 | null;


  html: htmlQueryString_4 | null;


  headings: headingsQueryList_4 | null;


  timeToRead: timeToReadQueryInt_4 | null;


  tableOfContents: tableOfContentsQueryString_4 | null;


  wordCount: wordCountTypeName_4 | null;

}


export interface markdownRemarkConnectionIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionInternalInputObject_2 {

  content: markdownRemarkConnectionInternalContentQueryString_2 | null;


  type: markdownRemarkConnectionInternalTypeQueryString_2 | null;


  contentDigest: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;


  owner: markdownRemarkConnectionInternalOwnerQueryString_2 | null;


  fieldOwners: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null;

}


export interface markdownRemarkConnectionInternalContentQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {

  slug: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null;

}


export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFrontmatterInputObject_2 {

  title: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;


  createdDate: markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 | null;


  updatedDate: markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 | null;


  author: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null;


  tags: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null;


  image: markdownRemarkConnectionFrontmatterImageQueryString_2 | null;


  draft: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null;


  _PARENT: markdownRemarkConnectionFrontmatterParentQueryString_2 | null;

}


export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFrontmatterImageQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface markdownRemarkConnectionFrontmatterParentQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface excerptQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionRawMarkdownBodyQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkConnectionFieldsInputObject_2 {

  slug: markdownRemarkConnectionFieldsSlugQueryString_2 | null;

}


export interface markdownRemarkConnectionFieldsSlugQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface htmlQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface headingsQueryList_4 {

  elemMatch: headingsListElemTypeName_4 | null;

}


export interface headingsListElemTypeName_4 {

  value: headingsListElemValueQueryString_4 | null;


  depth: headingsListElemDepthQueryInt_4 | null;

}


export interface headingsListElemValueQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface headingsListElemDepthQueryInt_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface timeToReadQueryInt_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface tableOfContentsQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface wordCountTypeName_4 {

  paragraphs: wordCountParagraphsQueryInt_4 | null;


  sentences: wordCountSentencesQueryInt_4 | null;


  words: wordCountWordsQueryInt_4 | null;

}


export interface wordCountParagraphsQueryInt_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface wordCountSentencesQueryInt_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface wordCountWordsQueryInt_4 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface MarkdownRemarkConnection {

  pageInfo: PageInfo;


  edges: Array<MarkdownRemarkEdge> | null;


  totalCount: number | null;


  distinct: Array<string> | null;


  group: Array<markdownRemarkGroupConnectionConnection> | null;

}


export interface DistinctMarkdownRemarkConnectionArgs {

  field: markdownRemarkDistinctEnum | null;

}


export interface GroupMarkdownRemarkConnectionArgs {

  skip: number | null;


  limit: number | null;


  field: markdownRemarkGroupEnum | null;

}


export interface MarkdownRemarkEdge {

  node: MarkdownRemark | null;


  next: MarkdownRemark | null;


  previous: MarkdownRemark | null;

}


export type markdownRemarkDistinctEnum =

  | 'id'

  | 'parent'

  | 'internal___content'

  | 'internal___type'

  | 'internal___contentDigest'

  | 'internal___owner'

  | 'internal___fieldOwners___slug'

  | 'frontmatter___title'

  | 'frontmatter___createdDate'

  | 'frontmatter___updatedDate'

  | 'frontmatter___author'

  | 'frontmatter___tags'

  | 'frontmatter___image'

  | 'frontmatter___draft'

  | 'frontmatter____PARENT'

  | 'excerpt'

  | 'rawMarkdownBody'

  | 'fileAbsolutePath'

  | 'fields___slug';


export type markdownRemarkGroupEnum =

  | 'id'

  | 'parent'

  | 'internal___content'

  | 'internal___type'

  | 'internal___contentDigest'

  | 'internal___owner'

  | 'internal___fieldOwners___slug'

  | 'frontmatter___title'

  | 'frontmatter___createdDate'

  | 'frontmatter___updatedDate'

  | 'frontmatter___author'

  | 'frontmatter___tags'

  | 'frontmatter___image'

  | 'frontmatter___draft'

  | 'frontmatter____PARENT'

  | 'excerpt'

  | 'rawMarkdownBody'

  | 'fileAbsolutePath'

  | 'fields___slug';


export interface markdownRemarkGroupConnectionConnection {

  pageInfo: PageInfo;


  edges: Array<markdownRemarkGroupConnectionEdge> | null;


  field: string | null;


  fieldValue: string | null;


  totalCount: number | null;

}


export interface markdownRemarkGroupConnectionEdge {

  node: MarkdownRemark | null;


  next: MarkdownRemark | null;


  previous: MarkdownRemark | null;

}


export interface authorJsonConnectionSort {

  fields: Array<AuthorJsonConnectionSortByFieldsEnum>;


  order: authorJsonConnectionSortOrderValues | null;

}


export type AuthorJsonConnectionSortByFieldsEnum =

  | 'id'

  | 'bio'

  | 'avatar'

  | 'twitter'

  | 'github'

  | 'parent'

  | 'internal___contentDigest'

  | 'internal___type'

  | 'internal___owner';


export type authorJsonConnectionSortOrderValues = 'ASC' | 'DESC';


export interface filterAuthorJson {

  id: authorJsonConnectionIdQueryString_2 | null;


  bio: authorJsonConnectionBioQueryString_2 | null;


  avatar: authorJsonConnectionAvatarQueryString_2 | null;


  twitter: authorJsonConnectionTwitterQueryString_2 | null;


  github: authorJsonConnectionGithubQueryString_2 | null;


  internal: authorJsonConnectionInternalInputObject_2 | null;

}


export interface authorJsonConnectionIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonConnectionBioQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonConnectionAvatarQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonConnectionTwitterQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonConnectionGithubQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonConnectionInternalInputObject_2 {

  contentDigest: authorJsonConnectionInternalContentDigestQueryString_2 | null;


  type: authorJsonConnectionInternalTypeQueryString_2 | null;


  owner: authorJsonConnectionInternalOwnerQueryString_2 | null;

}


export interface authorJsonConnectionInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonConnectionInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonConnectionInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface AuthorJsonConnection {

  pageInfo: PageInfo;


  edges: Array<AuthorJsonEdge> | null;


  totalCount: number | null;


  distinct: Array<string> | null;


  group: Array<authorJsonGroupConnectionConnection> | null;

}


export interface DistinctAuthorJsonConnectionArgs {

  field: authorJsonDistinctEnum | null;

}


export interface GroupAuthorJsonConnectionArgs {

  skip: number | null;


  limit: number | null;


  field: authorJsonGroupEnum | null;

}


export interface AuthorJsonEdge {

  node: AuthorJson | null;


  next: AuthorJson | null;


  previous: AuthorJson | null;

}


export type authorJsonDistinctEnum =

  | 'id'

  | 'bio'

  | 'avatar'

  | 'twitter'

  | 'github'

  | 'parent'

  | 'internal___contentDigest'

  | 'internal___type'

  | 'internal___owner';


export type authorJsonGroupEnum =

  | 'id'

  | 'bio'

  | 'avatar'

  | 'twitter'

  | 'github'

  | 'parent'

  | 'internal___contentDigest'

  | 'internal___type'

  | 'internal___owner';


export interface authorJsonGroupConnectionConnection {

  pageInfo: PageInfo;


  edges: Array<authorJsonGroupConnectionEdge> | null;


  field: string | null;


  fieldValue: string | null;


  totalCount: number | null;

}


export interface authorJsonGroupConnectionEdge {

  node: AuthorJson | null;


  next: AuthorJson | null;


  previous: AuthorJson | null;

}


export interface sitePageJsonNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageInternalComponentNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageComponentQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageComponentChunkNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageContextInputObject {

  slug: sitePageContextSlugQueryString | null;


  tag: sitePageContextTagQueryString | null;


  skip: sitePageContextSkipQueryInteger | null;

}


export interface sitePageContextSlugQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageContextTagQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageContextSkipQueryInteger {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface sitePagePluginCreatorInputObject {

  resolve: sitePagePluginCreatorResolveQueryString | null;


  id: sitePagePluginCreatorIdQueryString | null;


  name: sitePagePluginCreatorNameQueryString | null;


  version: sitePagePluginCreatorVersionQueryString | null;


  pluginOptions: sitePagePluginCreatorPluginOptionsInputObject | null;


  nodeAPIs: sitePagePluginCreatorNodeApIsQueryList | null;


  browserAPIs: sitePagePluginCreatorBrowserApIsQueryList | null;


  ssrAPIs: sitePagePluginCreatorSsrApIsQueryList | null;


  pluginFilepath: sitePagePluginCreatorPluginFilepathQueryString | null;


  packageJson: sitePagePluginCreatorPackageJsonInputObject | null;


  parent: sitePagePluginCreatorParentQueryString | null;


  internal: sitePagePluginCreatorInternalInputObject | null;

}


export interface sitePagePluginCreatorResolveQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorIdQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorVersionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsInputObject {

  plugins: sitePagePluginCreatorPluginOptionsPluginsQueryList | null;


  name: sitePagePluginCreatorPluginOptionsNameQueryString | null;


  path: sitePagePluginCreatorPluginOptionsPathQueryString | null;


  trackingId: sitePagePluginCreatorPluginOptionsTrackingIdQueryString | null;


  head: sitePagePluginCreatorPluginOptionsHeadQueryBoolean | null;


  anonymize: sitePagePluginCreatorPluginOptionsAnonymizeQueryBoolean | null;


  respectDNT: sitePagePluginCreatorPluginOptionsRespectDntQueryBoolean | null;


  maxWidth: sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger | null;


  backgroundColor: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null;


  short_name: sitePagePluginCreatorPluginOptionsShortNameQueryString | null;


  start_url: sitePagePluginCreatorPluginOptionsStartUrlQueryString | null;


  background_color: sitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 | null;


  theme_color: sitePagePluginCreatorPluginOptionsThemeColorQueryString | null;


  display: sitePagePluginCreatorPluginOptionsDisplayQueryString | null;


  pathCheck: sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {

  elemMatch: sitePagePluginCreatorPluginOptionsPluginsInputObject | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsInputObject {

  resolve: sitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null;


  id: sitePagePluginCreatorPluginOptionsPluginsIdQueryString | null;


  name: sitePagePluginCreatorPluginOptionsPluginsNameQueryString | null;


  version: sitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null;


  pluginOptions: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;


  browserAPIs: sitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList | null;


  ssrAPIs: sitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList | null;


  pluginFilepath: sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsResolveQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {

  maxWidth: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;


  backgroundColor: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsBackgroundColorQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPathQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsTrackingIdQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsHeadQueryBoolean {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePagePluginCreatorPluginOptionsAnonymizeQueryBoolean {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePagePluginCreatorPluginOptionsRespectDntQueryBoolean {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsShortNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsStartUrlQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsBackgroundColorQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsThemeColorQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsDisplayQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePagePluginCreatorNodeApIsQueryList {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorBrowserApIsQueryList {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorSsrApIsQueryList {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPluginFilepathQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonInputObject {

  name: sitePagePluginCreatorPackageJsonNameQueryString | null;


  description: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;


  version: sitePagePluginCreatorPackageJsonVersionQueryString | null;


  main: sitePagePluginCreatorPackageJsonMainQueryString | null;


  license: sitePagePluginCreatorPackageJsonLicenseQueryString | null;


  dependencies: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;


  devDependencies: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;


  peerDependencies: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;


  keywords: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;

}


export interface sitePagePluginCreatorPackageJsonNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonVersionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonMainQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonLicenseQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {

  elemMatch: sitePagePluginCreatorPackageJsonDependenciesInputObject | null;

}


export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {

  name: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;


  version: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;

}


export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {

  elemMatch: sitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;

}


export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {

  name: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;


  version: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;

}


export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {

  elemMatch: sitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;

}


export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {

  name: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;


  version: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;

}


export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorParentQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorInternalInputObject {

  contentDigest: sitePagePluginCreatorInternalContentDigestQueryString | null;


  type: sitePagePluginCreatorInternalTypeQueryString | null;


  owner: sitePagePluginCreatorInternalOwnerQueryString | null;

}


export interface sitePagePluginCreatorInternalContentDigestQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorInternalTypeQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorInternalOwnerQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePagePluginCreatorIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageComponentPathQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageInternalInputObject_2 {

  type: sitePageInternalTypeQueryString_2 | null;


  contentDigest: sitePageInternalContentDigestQueryString_2 | null;


  description: sitePageInternalDescriptionQueryString | null;


  owner: sitePageInternalOwnerQueryString_2 | null;

}


export interface sitePageInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageInternalDescriptionQueryString {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePageInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginResolveQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginVersionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsInputObject_2 {

  plugins: sitePluginPluginOptionsPluginsQueryList_2 | null;


  name: sitePluginPluginOptionsNameQueryString_2 | null;


  path: sitePluginPluginOptionsPathQueryString_2 | null;


  trackingId: sitePluginPluginOptionsTrackingIdQueryString_2 | null;


  head: sitePluginPluginOptionsHeadQueryBoolean_2 | null;


  anonymize: sitePluginPluginOptionsAnonymizeQueryBoolean_2 | null;


  respectDNT: sitePluginPluginOptionsRespectDntQueryBoolean_2 | null;


  maxWidth: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;


  backgroundColor: sitePluginPluginOptionsBackgroundColorQueryString_3 | null;


  short_name: sitePluginPluginOptionsShortNameQueryString_2 | null;


  start_url: sitePluginPluginOptionsStartUrlQueryString_2 | null;


  background_color: sitePluginPluginOptionsBackgroundColorQueryString_4 | null;


  theme_color: sitePluginPluginOptionsThemeColorQueryString_2 | null;


  display: sitePluginPluginOptionsDisplayQueryString_2 | null;


  pathCheck: sitePluginPluginOptionsPathCheckQueryBoolean_2 | null;

}


export interface sitePluginPluginOptionsPluginsQueryList_2 {

  elemMatch: sitePluginPluginOptionsPluginsInputObject_2 | null;

}


export interface sitePluginPluginOptionsPluginsInputObject_2 {

  resolve: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;


  id: sitePluginPluginOptionsPluginsIdQueryString_2 | null;


  name: sitePluginPluginOptionsPluginsNameQueryString_2 | null;


  version: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;


  pluginOptions: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;


  browserAPIs: sitePluginPluginOptionsPluginsBrowserApIsQueryList_2 | null;


  ssrAPIs: sitePluginPluginOptionsPluginsSsrApIsQueryList_2 | null;


  pluginFilepath: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;

}


export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPluginsIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPluginsNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {

  maxWidth: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;


  backgroundColor: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null;

}


export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPluginsSsrApIsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsTrackingIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsHeadQueryBoolean_2 {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePluginPluginOptionsAnonymizeQueryBoolean_2 {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePluginPluginOptionsRespectDntQueryBoolean_2 {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface sitePluginPluginOptionsBackgroundColorQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsShortNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsStartUrlQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsBackgroundColorQueryString_4 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsThemeColorQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsDisplayQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginOptionsPathCheckQueryBoolean_2 {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface sitePluginNodeApIsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginBrowserApIsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginSsrApIsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPluginFilepathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonInputObject_2 {

  name: sitePluginPackageJsonNameQueryString_2 | null;


  description: sitePluginPackageJsonDescriptionQueryString_2 | null;


  version: sitePluginPackageJsonVersionQueryString_2 | null;


  main: sitePluginPackageJsonMainQueryString_2 | null;


  license: sitePluginPackageJsonLicenseQueryString_2 | null;


  dependencies: sitePluginPackageJsonDependenciesQueryList_2 | null;


  devDependencies: sitePluginPackageJsonDevDependenciesQueryList_2 | null;


  peerDependencies: sitePluginPackageJsonPeerDependenciesQueryList_2 | null;


  keywords: sitePluginPackageJsonKeywordsQueryList_2 | null;

}


export interface sitePluginPackageJsonNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonDescriptionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonVersionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonMainQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonLicenseQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonDependenciesQueryList_2 {

  elemMatch: sitePluginPackageJsonDependenciesInputObject_2 | null;

}


export interface sitePluginPackageJsonDependenciesInputObject_2 {

  name: sitePluginPackageJsonDependenciesNameQueryString_2 | null;


  version: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;

}


export interface sitePluginPackageJsonDependenciesNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonDevDependenciesQueryList_2 {

  elemMatch: sitePluginPackageJsonDevDependenciesInputObject_2 | null;

}


export interface sitePluginPackageJsonDevDependenciesInputObject_2 {

  name: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;


  version: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;

}


export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {

  elemMatch: sitePluginPackageJsonPeerDependenciesInputObject_2 | null;

}


export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {

  name: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;


  version: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;

}


export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginPackageJsonKeywordsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginInternalInputObject_2 {

  contentDigest: sitePluginInternalContentDigestQueryString_2 | null;


  type: sitePluginInternalTypeQueryString_2 | null;


  owner: sitePluginInternalOwnerQueryString_2 | null;

}


export interface sitePluginInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePluginInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteSiteMetadataInputObject_2 {

  title: siteSiteMetadataTitleQueryString_2 | null;


  googleVerification: siteSiteMetadataGoogleVerificationQueryString_2 | null;


  disqus: siteSiteMetadataDisqusQueryString_2 | null;

}


export interface siteSiteMetadataTitleQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteSiteMetadataGoogleVerificationQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteSiteMetadataDisqusQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePortQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteHostQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteMappingInputObject_2 {

  MarkdownRemark_frontmatter_author: siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 | null;

}


export interface siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePathPrefixQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sitePolyfillQueryBoolean_2 {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface siteBuildTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteInternalInputObject_2 {

  contentDigest: siteInternalContentDigestQueryString_2 | null;


  type: siteInternalTypeQueryString_2 | null;


  owner: siteInternalOwnerQueryString_2 | null;

}


export interface siteInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface siteInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface Site extends Node {

  id: string;


  parent: Node | null;


  children: Array<Node> | null;


  siteMetadata: siteMetadata_2 | null;


  port: Date | null;


  host: string | null;


  mapping: mapping_2 | null;


  pathPrefix: string | null;


  polyfill: boolean | null;


  buildTime: Date | null;


  internal: internal_16 | null;

}


export interface PortSiteArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface BuildTimeSiteArgs {

  formatString: string | null;


  fromNow: boolean | null;


  difference: string | null;


  locale: string | null;

}


export interface siteMetadata_2 {

  title: string | null;


  googleVerification: string | null;


  disqus: string | null;

}


export interface mapping_2 {

  MarkdownRemark_frontmatter_author: string | null;

}


export interface internal_16 {

  contentDigest: string | null;


  type: string | null;


  owner: string | null;

}


export interface directoryIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryInternalInputObject_2 {

  contentDigest: directoryInternalContentDigestQueryString_2 | null;


  type: directoryInternalTypeQueryString_2 | null;


  description: directoryInternalDescriptionQueryString_2 | null;


  owner: directoryInternalOwnerQueryString_2 | null;

}


export interface directoryInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryInternalDescriptionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directorySourceInstanceNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryAbsolutePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryRelativePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryExtensionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directorySizeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryPrettySizeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryModifiedTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryAccessTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryChangeTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryBirthTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryRootQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryDirQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryBaseQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryExtQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryRelativeDirectoryQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryDevQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryModeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryNlinkQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryUidQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryGidQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryRdevQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryBlksizeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryInoQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryBlocksQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryAtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryMtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryCtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryBirthtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface directoryAtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryMtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryCtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface directoryBirthtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileInternalInputObject_2 {

  contentDigest: fileInternalContentDigestQueryString_2 | null;


  type: fileInternalTypeQueryString_2 | null;


  mediaType: fileInternalMediaTypeQueryString_2 | null;


  description: fileInternalDescriptionQueryString_2 | null;


  owner: fileInternalOwnerQueryString_2 | null;

}


export interface fileInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileInternalMediaTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileInternalDescriptionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileSourceInstanceNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileAbsolutePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileRelativePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileExtensionQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileSizeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface filePrettySizeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileModifiedTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileAccessTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileChangeTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileBirthTimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileRootQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileDirQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileBaseQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileExtQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileNameQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileRelativeDirectoryQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileDevQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileModeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileNlinkQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileUidQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileGidQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileRdevQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileBlksizeQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileInoQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileBlocksQueryInteger_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileAtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileMtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileCtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileBirthtimeMsQueryFloat_2 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fileAtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileMtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileCtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fileBirthtimeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface publicUrlQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface imageSharpIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface imageSharpInternalInputObject_2 {

  contentDigest: imageSharpInternalContentDigestQueryString_2 | null;


  type: imageSharpInternalTypeQueryString_2 | null;


  owner: imageSharpInternalOwnerQueryString_2 | null;

}


export interface imageSharpInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface imageSharpInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface imageSharpInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedTypeName_3 {

  base64: fixedBase64QueryString_3 | null;


  tracedSVG: fixedTracedSvgQueryString_3 | null;


  aspectRatio: fixedAspectRatioQueryFloat_3 | null;


  width: fixedWidthQueryFloat_3 | null;


  height: fixedHeightQueryFloat_3 | null;


  src: fixedSrcQueryString_3 | null;


  srcSet: fixedSrcSetQueryString_3 | null;


  srcWebp: fixedSrcWebpQueryString_3 | null;


  srcSetWebp: fixedSrcSetWebpQueryString_3 | null;


  originalName: fixedOriginalNameQueryString_3 | null;

}


export interface fixedBase64QueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedTracedSvgQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedAspectRatioQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fixedWidthQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fixedHeightQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fixedSrcQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedSrcSetQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedSrcWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedSrcSetWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fixedOriginalNameQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsTypeName_3 {

  base64: resolutionsBase64QueryString_3 | null;


  tracedSVG: resolutionsTracedSvgQueryString_3 | null;


  aspectRatio: resolutionsAspectRatioQueryFloat_3 | null;


  width: resolutionsWidthQueryFloat_3 | null;


  height: resolutionsHeightQueryFloat_3 | null;


  src: resolutionsSrcQueryString_3 | null;


  srcSet: resolutionsSrcSetQueryString_3 | null;


  srcWebp: resolutionsSrcWebpQueryString_3 | null;


  srcSetWebp: resolutionsSrcSetWebpQueryString_3 | null;


  originalName: resolutionsOriginalNameQueryString_3 | null;

}


export interface resolutionsBase64QueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsTracedSvgQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsAspectRatioQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resolutionsWidthQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resolutionsHeightQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resolutionsSrcQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsSrcSetQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsSrcWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsSrcSetWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resolutionsOriginalNameQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidTypeName_3 {

  base64: fluidBase64QueryString_3 | null;


  tracedSVG: fluidTracedSvgQueryString_3 | null;


  aspectRatio: fluidAspectRatioQueryFloat_3 | null;


  src: fluidSrcQueryString_3 | null;


  srcSet: fluidSrcSetQueryString_3 | null;


  srcWebp: fluidSrcWebpQueryString_3 | null;


  srcSetWebp: fluidSrcSetWebpQueryString_3 | null;


  sizes: fluidSizesQueryString_3 | null;


  originalImg: fluidOriginalImgQueryString_3 | null;


  originalName: fluidOriginalNameQueryString_3 | null;

}


export interface fluidBase64QueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidTracedSvgQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidAspectRatioQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface fluidSrcQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSrcSetQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSrcWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSrcSetWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidSizesQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidOriginalImgQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface fluidOriginalNameQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesTypeName_3 {

  base64: sizesBase64QueryString_3 | null;


  tracedSVG: sizesTracedSvgQueryString_3 | null;


  aspectRatio: sizesAspectRatioQueryFloat_3 | null;


  src: sizesSrcQueryString_3 | null;


  srcSet: sizesSrcSetQueryString_3 | null;


  srcWebp: sizesSrcWebpQueryString_3 | null;


  srcSetWebp: sizesSrcSetWebpQueryString_3 | null;


  sizes: sizesSizesQueryString_3 | null;


  originalImg: sizesOriginalImgQueryString_3 | null;


  originalName: sizesOriginalNameQueryString_3 | null;

}


export interface sizesBase64QueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesTracedSvgQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesAspectRatioQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface sizesSrcQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSrcSetQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSrcWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSrcSetWebpQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesSizesQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesOriginalImgQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface sizesOriginalNameQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface originalTypeName_3 {

  width: originalWidthQueryFloat_3 | null;


  height: originalHeightQueryFloat_3 | null;


  src: originalSrcQueryString_3 | null;

}


export interface originalWidthQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface originalHeightQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface originalSrcQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resizeTypeName_3 {

  src: resizeSrcQueryString_3 | null;


  tracedSVG: resizeTracedSvgQueryString_3 | null;


  width: resizeWidthQueryInt_3 | null;


  height: resizeHeightQueryInt_3 | null;


  aspectRatio: resizeAspectRatioQueryFloat_3 | null;


  originalName: resizeOriginalNameQueryString_3 | null;

}


export interface resizeSrcQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resizeTracedSvgQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface resizeWidthQueryInt_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resizeHeightQueryInt_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resizeAspectRatioQueryFloat_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface resizeOriginalNameQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkInternalInputObject_2 {

  content: markdownRemarkInternalContentQueryString_2 | null;


  type: markdownRemarkInternalTypeQueryString_2 | null;


  contentDigest: markdownRemarkInternalContentDigestQueryString_2 | null;


  owner: markdownRemarkInternalOwnerQueryString_2 | null;


  fieldOwners: markdownRemarkInternalFieldOwnersInputObject_2 | null;

}


export interface markdownRemarkInternalContentQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkInternalFieldOwnersInputObject_2 {

  slug: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null;

}


export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFrontmatterInputObject_2 {

  title: markdownRemarkFrontmatterTitleQueryString_2 | null;


  createdDate: markdownRemarkFrontmatterCreatedDateQueryString_2 | null;


  updatedDate: markdownRemarkFrontmatterUpdatedDateQueryString_2 | null;


  author: markdownRemarkFrontmatterAuthorQueryString_2 | null;


  tags: markdownRemarkFrontmatterTagsQueryList_2 | null;


  image: markdownRemarkFrontmatterImageQueryString_2 | null;


  draft: markdownRemarkFrontmatterDraftQueryBoolean_2 | null;


  _PARENT: markdownRemarkFrontmatterParentQueryString_2 | null;

}


export interface markdownRemarkFrontmatterTitleQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFrontmatterCreatedDateQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFrontmatterUpdatedDateQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFrontmatterAuthorQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFrontmatterTagsQueryList_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFrontmatterImageQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {

  eq: boolean | null;


  ne: boolean | null;


  in: Array<boolean> | null;

}


export interface markdownRemarkFrontmatterParentQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface excerptQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkRawMarkdownBodyQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFileAbsolutePathQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface markdownRemarkFieldsInputObject_2 {

  slug: markdownRemarkFieldsSlugQueryString_2 | null;

}


export interface markdownRemarkFieldsSlugQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface htmlQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface headingsQueryList_3 {

  elemMatch: headingsListElemTypeName_3 | null;

}


export interface headingsListElemTypeName_3 {

  value: headingsListElemValueQueryString_3 | null;


  depth: headingsListElemDepthQueryInt_3 | null;

}


export interface headingsListElemValueQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface headingsListElemDepthQueryInt_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface timeToReadQueryInt_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface tableOfContentsQueryString_3 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface wordCountTypeName_3 {

  paragraphs: wordCountParagraphsQueryInt_3 | null;


  sentences: wordCountSentencesQueryInt_3 | null;


  words: wordCountWordsQueryInt_3 | null;

}


export interface wordCountParagraphsQueryInt_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface wordCountSentencesQueryInt_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface wordCountWordsQueryInt_3 {

  eq: number | null;


  ne: number | null;


  gt: number | null;


  gte: number | null;


  lt: number | null;


  lte: number | null;


  in: Array<number> | null;

}


export interface authorJsonIdQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonBioQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonAvatarQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonTwitterQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonGithubQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonInternalInputObject_2 {

  contentDigest: authorJsonInternalContentDigestQueryString_2 | null;


  type: authorJsonInternalTypeQueryString_2 | null;


  owner: authorJsonInternalOwnerQueryString_2 | null;

}


export interface authorJsonInternalContentDigestQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonInternalTypeQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}


export interface authorJsonInternalOwnerQueryString_2 {

  eq: string | null;


  ne: string | null;


  regex: string | null;


  glob: string | null;


  in: Array<string> | null;

}

