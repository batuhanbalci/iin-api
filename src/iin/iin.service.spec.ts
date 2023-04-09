import fs from 'fs';
import { viewText } from '../../src/common/util';

describe('IinService', () => {
  // let service: IinService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [IinService],
  //   }).compile();

  //   service = module.get<IinService>(IinService);
  // });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  it('xxxxxx', (done) => {
    const logSpy = jest.spyOn(console, 'log');
    let readFileCallback;

    jest.spyOn(fs, 'readFile').mockImplementation((path, options, callback) => {
      readFileCallback = callback;
    });

    viewText();
    readFileCallback(null, 'mockPoem');
    expect(logSpy).toBeCalledWith('mockPoem');
    expect(fs.readFile).toBeCalledWith('poem.txt', 'utf8', readFileCallback);
    done();
  });
});
