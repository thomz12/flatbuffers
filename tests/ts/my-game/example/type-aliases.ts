// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';



export class TypeAliases implements flatbuffers.IUnpackableObject<TypeAliasesT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TypeAliases {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTypeAliases(bb:flatbuffers.ByteBuffer, obj?:TypeAliases):TypeAliases {
  return (obj || new TypeAliases()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTypeAliases(bb:flatbuffers.ByteBuffer, obj?:TypeAliases):TypeAliases {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TypeAliases()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

i8():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : 0;
}

mutate_i8(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, value);
  return true;
}

u8():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

mutate_u8(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint8(this.bb_pos + offset, value);
  return true;
}

i16():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

mutate_i16(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt16(this.bb_pos + offset, value);
  return true;
}

u16():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

mutate_u16(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint16(this.bb_pos + offset, value);
  return true;
}

i32():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

mutate_i32(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt32(this.bb_pos + offset, value);
  return true;
}

u32():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

mutate_u32(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 14);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
}

i64():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : BigInt('0');
}

mutate_i64(value:bigint):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 16);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt64(this.bb_pos + offset, value);
  return true;
}

u64():bigint {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint64(this.bb_pos + offset) : BigInt('0');
}

mutate_u64(value:bigint):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 18);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint64(this.bb_pos + offset, value);
  return true;
}

f32():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

mutate_f32(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 20);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeFloat32(this.bb_pos + offset, value);
  return true;
}

f64():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

mutate_f64(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 22);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeFloat64(this.bb_pos + offset, value);
  return true;
}

v8(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readInt8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

v8Length():number {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

v8Array():Int8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? new Int8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

vf64(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

vf64Length():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

vf64Array():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static getFullyQualifiedName():string {
  return 'MyGame.Example.TypeAliases';
}

static startTypeAliases(builder:flatbuffers.Builder) {
  builder.startObject(12);
}

static addI8(builder:flatbuffers.Builder, i8:number) {
  builder.addFieldInt8(0, i8, 0);
}

static addU8(builder:flatbuffers.Builder, u8:number) {
  builder.addFieldInt8(1, u8, 0);
}

static addI16(builder:flatbuffers.Builder, i16:number) {
  builder.addFieldInt16(2, i16, 0);
}

static addU16(builder:flatbuffers.Builder, u16:number) {
  builder.addFieldInt16(3, u16, 0);
}

static addI32(builder:flatbuffers.Builder, i32:number) {
  builder.addFieldInt32(4, i32, 0);
}

static addU32(builder:flatbuffers.Builder, u32:number) {
  builder.addFieldInt32(5, u32, 0);
}

static addI64(builder:flatbuffers.Builder, i64:bigint) {
  builder.addFieldInt64(6, i64, BigInt('0'));
}

static addU64(builder:flatbuffers.Builder, u64:bigint) {
  builder.addFieldInt64(7, u64, BigInt('0'));
}

static addF32(builder:flatbuffers.Builder, f32:number) {
  builder.addFieldFloat32(8, f32, 0.0);
}

static addF64(builder:flatbuffers.Builder, f64:number) {
  builder.addFieldFloat64(9, f64, 0.0);
}

static addV8(builder:flatbuffers.Builder, v8Offset:flatbuffers.Offset) {
  builder.addFieldOffset(10, v8Offset, 0);
}

static createV8Vector(builder:flatbuffers.Builder, data:number[]|Int8Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createV8Vector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createV8Vector(builder:flatbuffers.Builder, data:number[]|Int8Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startV8Vector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addVf64(builder:flatbuffers.Builder, vf64Offset:flatbuffers.Offset) {
  builder.addFieldOffset(11, vf64Offset, 0);
}

static createVf64Vector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createVf64Vector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createVf64Vector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]!);
  }
  return builder.endVector();
}

static startVf64Vector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static endTypeAliases(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTypeAliases(builder:flatbuffers.Builder, i8:number, u8:number, i16:number, u16:number, i32:number, u32:number, i64:bigint, u64:bigint, f32:number, f64:number, v8Offset:flatbuffers.Offset, vf64Offset:flatbuffers.Offset):flatbuffers.Offset {
  TypeAliases.startTypeAliases(builder);
  TypeAliases.addI8(builder, i8);
  TypeAliases.addU8(builder, u8);
  TypeAliases.addI16(builder, i16);
  TypeAliases.addU16(builder, u16);
  TypeAliases.addI32(builder, i32);
  TypeAliases.addU32(builder, u32);
  TypeAliases.addI64(builder, i64);
  TypeAliases.addU64(builder, u64);
  TypeAliases.addF32(builder, f32);
  TypeAliases.addF64(builder, f64);
  TypeAliases.addV8(builder, v8Offset);
  TypeAliases.addVf64(builder, vf64Offset);
  return TypeAliases.endTypeAliases(builder);
}

serialize():Uint8Array {
  return this.bb!.bytes();
}

static deserialize(buffer: Uint8Array):TypeAliases {
  return TypeAliases.getRootAsTypeAliases(new flatbuffers.ByteBuffer(buffer))
}

unpack(): TypeAliasesT {
  return new TypeAliasesT(
    this.i8(),
    this.u8(),
    this.i16(),
    this.u16(),
    this.i32(),
    this.u32(),
    this.i64(),
    this.u64(),
    this.f32(),
    this.f64(),
    this.bb!.createScalarList<number>(this.v8.bind(this), this.v8Length()),
    this.bb!.createScalarList<number>(this.vf64.bind(this), this.vf64Length())
  );
}


unpackTo(_o: TypeAliasesT): void {
  _o.i8 = this.i8();
  _o.u8 = this.u8();
  _o.i16 = this.i16();
  _o.u16 = this.u16();
  _o.i32 = this.i32();
  _o.u32 = this.u32();
  _o.i64 = this.i64();
  _o.u64 = this.u64();
  _o.f32 = this.f32();
  _o.f64 = this.f64();
  _o.v8 = this.bb!.createScalarList<number>(this.v8.bind(this), this.v8Length());
  _o.vf64 = this.bb!.createScalarList<number>(this.vf64.bind(this), this.vf64Length());
}
}

export class TypeAliasesT implements flatbuffers.IGeneratedObject {
constructor(
  public i8: number = 0,
  public u8: number = 0,
  public i16: number = 0,
  public u16: number = 0,
  public i32: number = 0,
  public u32: number = 0,
  public i64: bigint = BigInt('0'),
  public u64: bigint = BigInt('0'),
  public f32: number = 0.0,
  public f64: number = 0.0,
  public v8: (number)[] = [],
  public vf64: (number)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const v8 = TypeAliases.createV8Vector(builder, this.v8);
  const vf64 = TypeAliases.createVf64Vector(builder, this.vf64);

  return TypeAliases.createTypeAliases(builder,
    this.i8,
    this.u8,
    this.i16,
    this.u16,
    this.i32,
    this.u32,
    this.i64,
    this.u64,
    this.f32,
    this.f64,
    v8,
    vf64
  );
}
}
