import { container,  } from 'tsyringe'
// import DependencyContainer from 'tsyringe/dist/typings/types'
import { PostRepository } from '@src/models/post/respostitory/PostRepository';
import { IPostRepository } from '@models/post/InterfacesPost';


// DependencyContainer.Lifecycle.Singleton

container.registerSingleton<IPostRepository>("PostRepository", PostRepository );