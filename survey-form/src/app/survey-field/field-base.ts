export class FieldBase<T> {
    field: string;
    type: string;
    required: boolean;
    length?: number;
    options?: string[];

    constructor(options: {
        field?: string,
        type?: string,
        required?: boolean,
        length?: number,
      } = {}) {
      this.field = options.field || '';
      this.type = options.type || '';
      this.required = !!options.required;
      this.length = options.length;
    }
  }
