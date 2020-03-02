export const CommonSectionAction = {
  Save: 'Save',
  Open: 'Open',
  Upload: 'Upload',
  Download: 'Download'
}

/**
 *
 * PlaygroundEntity
 */
export const PlaygroundEntity = {
  Node: 'Node',
  Edge: 'Edge'
}

/**
 * @readonly
 * @enum PlaygroundMode
 */
export const PlaygroundMode = {
  Idle: 'Idle',
  Info: 'Info',
  Move: 'Move',
  Delete: 'Delete',
  CreateEdge: 'CreateEdge',
  CreateNode: 'CreateNode'
}

/**
 * @readonly
 * @enum NodeToolbarButtonType
 */
export const NodeToolbarButtonType = {
  Add: 'Add',
  Move: 'Move',
  Delete: 'Delete'
}


export const NodeToolbarButtonTypeToPlaygroundMode = {
  [NodeToolbarButtonType.Add]: PlaygroundMode.CreateNode,
  [NodeToolbarButtonType.Move]: PlaygroundMode.Move,
  [NodeToolbarButtonType.Delete]: PlaygroundMode.Delete,
}
