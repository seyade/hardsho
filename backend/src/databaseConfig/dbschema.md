users [icon: users] {
    id string pk
    username string
    email string
    profile string
    name string
    role string
    appTenure string
    skills string
    clients clients
    workspaces workspaces
    createdAt timestamp
    updatedAt timestamp
}

workspaces [icon: folder] {
  id string pk
  userId string fk
  name string
  description string
  projects projects
  createdAt timestamp
  updatedAt timestamp
}

projects [icon: folder] {
    id string pk
    userId string fk
    workspaceId string fk
    name string
    description string
    date timestamp
    crafts cratfs
    createdAt timestamp
    updatedAt timestamp
}

crafts [icon: image] {
    id string pk
    userId string fk
    projectId string fk
    name string
    htmlCode string
    cssCode string
	  jsCode string
    createdAt timestamp
    updatedAt timestamp
}

invite [icon: mail] {
    inviteId string
    type string
    workspaceId string
    inviterId string
    createdAt timestamp
}

workspaces.userId > users.id
projects.workspaceId > workspaces.id
projects.userId > users.id
crafts.projectId > projects.id
crafts.userId > users.id
invite.workspaceId - workspaces.id
invite.inviteId > users.id