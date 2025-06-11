import { Injectable } from "@angular/core";

export type CsvRecords = string[];

export type CsvSettings = {
  delimiter: string;
  minimumColumnsCount?: number;
};

export type CsvRow = {
  lineNumber?: number;
  records: CsvRecords;
};

export type CsvContent = {
  header?: CsvRow;
  rows: CsvRow[];
}

export type CsvIgnoredLine = {
  lineNumber: number;
  content: string;
}

export type CsvParseResult = {
  ignoredLines: CsvIgnoredLine[];
  content: CsvContent;
}

export abstract class CsvParser {
  abstract minimumColumnsCount: number;
  abstract delimiter: string;

  abstract parse(text: string): CsvParseResult;
}

