import { container,  } from 'tsyringe'
import DependencyContainer from 'tsyringe/dist/typings/types'
import { PostRepository } from '@src/models/post/PostRepository'

DependencyContainer.Lifecycle.Singleton

container.registerSingleton<PostRepository>("PostRepository", PostRepository );