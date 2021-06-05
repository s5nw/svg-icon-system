import { LibraryInterface } from '../classes/library';
import { LibraryService } from './library-service';

export interface ConfigInterface {
    elementName?: string,
    fetchPattern?: string,
    urlTestPattern?: RegExp,
    // eslint-disable-next-line no-undef
    intersectionObserver?: IntersectionObserverInit,
    library?: LibraryInterface,
}

export class ConfigService {
    private static config: ConfigInterface = {
        // eslint-disable-next-line
        urlTestPattern: /^(https?:\/\/(www\.)?)?[-a-zA-Z0-9@:%._+~#=/]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
        intersectionObserver: {},
    };

    public static getConfig(): ConfigInterface {
        return this.config;
    }

    public static setConfig(config: ConfigInterface) {
        this.config = {
            ...this.config,
            ...config
        };

        LibraryService.merge(this.config.library);
    }
}
