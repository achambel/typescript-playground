import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const consoleReport = new Summary(
  new WinsAnalysis('Bournemouth'),
  new ConsoleReport()
);

consoleReport.buildAndPrintReport(matchReader.matches);

const htmlReport = Summary.winsAnalysisWithHtmlReport('Man United');
htmlReport.buildAndPrintReport(matchReader.matches);
